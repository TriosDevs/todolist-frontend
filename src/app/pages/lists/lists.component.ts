import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {
  isLoading: boolean;
  lists:[];
  constructor(
    private popupService: PopupService,
    private httpService: HttpService,
    
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.httpService.createHttpRequest('api/v1/lists', 'GET', {}).subscribe(
      (res) => {
        setTimeout(() => {
          console.log(res);
          this.lists = res;
          this.isLoading = false;
          
        }, 2000);
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  openPopup() {
    this.popupService.changePopupStatus(true, 'create', 'list',{});
  }
}
