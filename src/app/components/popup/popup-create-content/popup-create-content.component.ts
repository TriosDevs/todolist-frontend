import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ListsService } from 'src/app/services/lists.service';
import { PopupService } from 'src/app/services/popup.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-popup-create-content',
  templateUrl: './popup-create-content.component.html',
  styleUrls: ['./popup-create-content.component.scss'],
})
export class PopupCreateContentComponent {
  @Input() popup: { status: boolean; type: string; target: string; data: any };
  header: string;
  target:string;
  isListsPage:boolean = false;
  isDetailedListPage:boolean = false;
  isLoading: boolean;
  errorMessage: string;
  errorStatus: boolean;
  constructor(
    private httpService: HttpService,
    private popupService: PopupService,
    private successMessageToggleService: SuccessMessageToggleService,
    private listsService: ListsService,
    private TasksService: TasksService,
    private router: Router,
  ) {}

  ngOnInit() {

    switch (this.popup.target) {
      case 'list':
        this.header = 'Give a name to your list';
        this.isListsPage = true;
        break;
      case 'task':
        this.header = 'Give a name to your task';
        this.isDetailedListPage = true;
        break;
    }
  }

  createList(form: NgForm) {
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
    this.httpService.createHttpRequest('api/v1/lists', 'POST', data).subscribe(
      (res) => {
        this.isLoading = false;
        this.successMessageToggleService.openSuccessMessage(
          'Your list created successfully!'
        );
        this.popupService.changePopupStatus(false, '-', '-', {});
        this.listsService.fetchData();
      },
      (error) => {
        this.errorMessage = error.errors[0].message;
        this.errorStatus = true;
        this.isLoading = false;
      }
    );
  }

  createTask(form: NgForm) {
    console.log(this.router.url.slice(7));

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
    this.httpService.createHttpRequest('api/v1/tasks?listId=' + this.router.url.slice(7), 'POST', data).subscribe(
      (res) => {
        this.isLoading = false;
        this.successMessageToggleService.openSuccessMessage(
          'Your task created successfully!'
        );
        this.popupService.changePopupStatus(false, '-', '-', {});
        this.TasksService.fetchData(this.router.url.slice(7));
      },
      (error) => {
        this.errorMessage = error.errors[0].message;
        this.errorStatus = true;
        this.isLoading = false;
      }
    );
  }
}
