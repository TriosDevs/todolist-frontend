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
  constructor(
    private httpService: HttpService,
    private popupService: PopupService
  ) {}

  ngOnInit() {
    this.httpService.createHttpRequest('/api/list', 'GET', {}).subscribe(
      (res) => {
        console.log(res);
        res.content = this.list;
        if (this.list.length == 0) {
          this.informationAboutList = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
