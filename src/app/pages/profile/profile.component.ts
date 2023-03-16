import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { PopupService } from '../../services/popup.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name: string;
  surname: string;
  email: string;
  isLoading: boolean;

  constructor(
    private httpService: HttpService,
    private popupService: PopupService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.httpService.createHttpRequest('api/v1/users', 'GET', {}).subscribe(
      (res) => {
        console.log(res);
        setTimeout(() => {
          this.name = res.firstName;
          this.surname = res.lastName;
          this.email = res.email;
          this.isLoading = false;
        }, 2000);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openPopup() {
    this.popupService.changePopupStatus(true, 'remove', 'profile');
  }
}
