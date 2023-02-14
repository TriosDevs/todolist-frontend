import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpService } from '../http.service';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  popupStatus: boolean;

  constructor(
    private popupService: PopupService,
    private authService: AuthService,
    private httpService: HttpService,
    private router: Router
  ) {}
  ngOnInit() {
    this.popupService.getMessage().subscribe((e) => {
      this.popupStatus = e.text;
    });
  }

  changePopupStatus() {
    this.popupService.changePopupStatus(false);
  }

  removeAccount() {
    this.httpService.createHttpRequest('/api/user', 'DELETE', {}).subscribe(
      (res) => {
        console.log(res);
        this.authService.logout();
        this.popupService.changePopupStatus(false);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
