import { Component } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ListsService } from 'src/app/services/lists.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {
  isLoading: boolean;
  lists: [];
  currentRoute: string;

  constructor(
    private popupService: PopupService,
    private httpService: HttpService,
    private listsService: ListsService,
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.listsService.getData().subscribe((data:any) =>{
      this.isLoading = true;
      this.lists = data.data;
      this.isLoading = false;
    })
    
    this.httpService.createHttpRequest('api/v1/lists', 'GET', {}).subscribe(
      (res) => {
        setTimeout(() => {
          console.log(res);
          this.lists = res;
          this.isLoading = false;
        }, 100);
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  openPopup() {
    this.popupService.changePopupStatus(true, 'create', 'list', {});
  }
}
