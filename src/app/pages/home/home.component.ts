import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list = [];
  tasks = [];
  informationAboutList: boolean = false;
  isLoading: boolean;
  index: string;
  event$
  constructor(private httpService: HttpService, private router: Router) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.httpService.createHttpRequest('api/v1/lists', 'GET', {}).subscribe(
      (res) => {
        this.list = res;
        if (this.list.length == 0) {
          this.informationAboutList = true;
        } else {
          let nearestTime = '-1';
          for (const i in this.list) {
            if (this.list[i].createdAt > nearestTime) {
              nearestTime = this.list[i].createdAt;
              this.index = i;
            }
          }
          this.httpService
            .createHttpRequest(
              'api/v1/tasks?listId=' + this.list[this.index].id,
              'GET',
              {}
            )
            .subscribe(
              (res) => {
                console.log(res);
                this.tasks = res;
                this.isLoading = false;
              },
              (error) => {
                console.log(error);
              }
            );
        }

        this.isLoading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
