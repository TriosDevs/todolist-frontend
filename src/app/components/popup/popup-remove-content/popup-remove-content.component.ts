import { Component, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ListsService } from 'src/app/services/lists.service';
import { PopupService } from 'src/app/services/popup.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-popup-remove-content',
  templateUrl: './popup-remove-content.component.html',
  styleUrls: ['./popup-remove-content.component.scss'],
})
export class PopupRemoveContentComponent {
  @Input() popup: { status: boolean; type: string; target: string; data: any };
  header: string;
  isLoading: boolean;

  constructor(
    private popupService: PopupService,
    private httpService: HttpService,
    private successMessageToggleService: SuccessMessageToggleService,
    private listsService: ListsService,
    private tasksService: TasksService,
    private router: Router
  ) {}

  ngOnInit() {
    switch (this.popup.target) {
      case 'profile':
        this.header = 'Are you sure that you remove your account?';
        break;
      case 'list':
        this.header = 'Are you sure that you remove this list?';
        break;
      case 'task':
        this.header = 'Are you sure that you remove this task?';
        break;
    }
  }

  removeList() {
    this.isLoading = true;
    this.httpService
      .createHttpRequest('api/v1/lists/' + this.popup.data.id, 'DELETE', {})
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.popupService.changePopupStatus(false, '-', '-', {});
          this.successMessageToggleService.openSuccessMessage(
            'Your list removed successfully!'
          );

          this.listsService.fetchData();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  removeTask() {
    this.isLoading = true;
    this.httpService
      .createHttpRequest('api/v1/tasks/' + this.popup.data.id ,'DELETE', {})
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.popupService.changePopupStatus(false, '-', '-', {});
          this.successMessageToggleService.openSuccessMessage(
            'Your task removed successfully!'
          );

          this.tasksService.fetchData(this.router.url.slice(7) );
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
