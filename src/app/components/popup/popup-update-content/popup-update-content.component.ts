import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ListsService } from 'src/app/services/lists.service';
import { PopupService } from 'src/app/services/popup.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-popup-update-content',
  templateUrl: './popup-update-content.component.html',
  styleUrls: ['./popup-update-content.component.scss'],
})
export class PopupUpdateContentComponent {
  @Input() popup: { status: boolean; type: string; target: string; data: any };
  header: string;
  isLoading: boolean;
  errorMessage: string;
  errorStatus: boolean;

  constructor(
    private httpService: HttpService,
    private successMessageToggleService: SuccessMessageToggleService,
    private listsService: ListsService,
    private tasksService: TasksService,
    private popupService: PopupService,
    private router:Router
  ) {}

  ngOnInit() {
    switch (this.popup.target) {
      case 'list':
        this.header = 'Update the list’s name';
        break;
      case 'task':
        this.header = 'Update the task’s name';
        break;
    }
  }

  updateList(form: NgForm) {
    let data = {
      name: form.value.name.trim(),
    };

    this.errorStatus = false;
    if (data.name.length == 0) {
      this.errorMessage = 'The area must be filled!';
      this.errorStatus = true;
      return;
    }
    this.isLoading = true;
    this.httpService
      .createHttpRequest('api/v1/lists/' + this.popup.data.id, 'PUT', data)
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.popupService.changePopupStatus(false, '-', '-', {});
          this.successMessageToggleService.openSuccessMessage(
            'Your list updated successfully!'
          );

          this.listsService.fetchData();
        },
        (error) => {
          console.log(error);
          this.errorStatus = true;
          this.isLoading = false;
        }
      );
  }

  updateTask(form: NgForm) {
    let data = {
      name: form.value.name.trim(),
    };

    this.errorStatus = false;
    if (data.name.length == 0) {
      this.errorMessage = 'The area must be filled!';
      this.errorStatus = true;
      return;
    }
    this.isLoading = true;
    this.httpService
      .createHttpRequest('api/v1/tasks/' + this.popup.data.id, 'PUT', data)
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.popupService.changePopupStatus(false, '-', '-', {});
          this.successMessageToggleService.openSuccessMessage(
            'Your task updated successfully!'
          );

          this.tasksService.fetchData(this.router.url.slice(7) );
        },
        (error) => {
          console.log(error);
          this.errorStatus = true;
          this.isLoading = false;
        }
      );
  }
}
