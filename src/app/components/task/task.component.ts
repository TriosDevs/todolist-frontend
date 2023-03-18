import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: { id: number; name: string; done: boolean; createdAt: string };
  dropdownStatus: boolean;

  constructor(
    private popupService: PopupService,
    private httpService: HttpService,
    private tasksService: TasksService,
    private router: Router
  ) {}

  changeTaskStatus() {
    let data = {
      name: this.task.name,
      done: !this.task.done,
    };

    this.httpService
      .createHttpRequest('api/v1/tasks/' + this.task.id, 'PUT', data)
      .subscribe(
        (res) => {
          console.log(res);
          this.tasksService.fetchData(this.router.url.slice(7));
          // this.lists = res;
          //this.isLoading = false;
        },
        (error) => {
          //this.isLoading = false;
          console.log(error);
        }
      );
  }

  openDropdown() {
    this.dropdownStatus = !this.dropdownStatus;
  }

  editTask() {
    this.popupService.changePopupStatus(true, 'update', 'task', {
      id: this.task.id,
    });
  }

  removeTask() {
    this.popupService.changePopupStatus(true, 'remove', 'task', {
      id: this.task.id,
    });
  }
}
