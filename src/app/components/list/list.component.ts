import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import * as $ from 'jquery';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() list: { id: number; name: string; createdAt: string; count: number };
  dropdownStatus: boolean;
  constructor(
    private popupService: PopupService,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.httpService.createHttpRequest('api/v1/tasks/', 'GET', {}).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editList() {
    this.popupService.changePopupStatus(true, 'update', 'list', {
      id: this.list.id,
    });
  }

  removeList() {
    this.popupService.changePopupStatus(true, 'remove', 'list', {
      id: this.list.id,
    });
  }

  openTask() {
    this.router.navigate(['/lists/' + this.list.id]);
  }

  avoidProg(event: Event) {
    event.stopPropagation();
  }

  toggleDropdown() {
    this.dropdownStatus == !this.dropdownStatus;
  }
}
