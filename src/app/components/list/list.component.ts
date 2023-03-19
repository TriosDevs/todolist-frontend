import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import * as $ from 'jquery';
import { HttpService } from 'src/app/services/http.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() list: { id: number; name: string; createdAt: string; count: number };
  dropdownStatus: boolean;
  taskNumber: string;
  constructor(
    private popupService: PopupService,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.list.count > 1) {
      this.taskNumber = this.list.count + ' Tasks';
    } else {
      this.taskNumber = this.list.count + ' Task';
    }
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
