import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-detailed-list',
  templateUrl: './detailed-list.component.html',
  styleUrls: ['./detailed-list.component.scss'],
})
export class DetailedListComponent {
  isLoading: boolean;
  tasks: [];
  header: string;

  constructor(
    private popupService: PopupService,
    private httpService: HttpService,
    private tasksService: TasksService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.tasksService.getData().subscribe((data: any) => {
      this.isLoading = true;
      this.tasks = data.data;
      this.isLoading = false;
    });

    this.httpService
      .createHttpRequest(
        'api/v1/tasks?listId=' + this.router.url.slice(7),
        'GET',
        {}
      )
      .subscribe(
        (res) => {
          setTimeout(() => {
            this.tasks = res;
            this.isLoading = false;
          }, 100);
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
        }
      );

    this.httpService.createHttpRequest('api/v1/lists/', 'GET', {}).subscribe(
      (res) => {
        for (const i in res) {
          if (res[i].id == this.router.url.slice(7)) {
            this.header = res[i].name;
          }
        }

        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  openPopup() {
    this.popupService.changePopupStatus(true, 'create', 'task', {});
  }
}
