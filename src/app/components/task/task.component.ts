import { Component } from '@angular/core';
import * as $ from 'jquery';
import { PopupService } from 'src/app/services/popup.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  taskStatus: boolean;
  dropdownStatus: boolean;

  constructor(private popupSerive: PopupService) {}

  changeTaskStatus() {
    this.taskStatus = !this.taskStatus;
  }

  openDropdown() {
    this.dropdownStatus = !this.dropdownStatus;
  }

  openPopupForEditingTask() {
    this.dropdownStatus = !this.dropdownStatus;
    this.popupSerive.changePopupStatus(true, 'update', 'task');
  }

  openPopupForRemovingTask() {
    this.dropdownStatus = !this.dropdownStatus;
    this.popupSerive.changePopupStatus(true, 'remove', 'task');
  }
}
