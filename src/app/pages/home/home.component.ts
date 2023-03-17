import { Component, OnInit } from '@angular/core';
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
  informationAboutList: boolean = false;
  isLoading: boolean;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.isLoading = true;
    this.httpService.createHttpRequest('api/v1/lists', 'GET', {}).subscribe(
      (res) => {
        this.list = res;
        if (this.list.length == 0) {
          this.informationAboutList = true;
        }

        this.isLoading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
