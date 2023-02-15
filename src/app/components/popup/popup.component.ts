import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';
import { PopupService } from '../../services/popup.service';

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

  createList(form:NgForm) {
    const data = {
      name: form.value.name,
    };
    this.httpService.createHttpRequest('/api/list', 'POST', data).subscribe(
      (res) => {
        console.log(res);
        this.popupService.changePopupStatus(false);
        this.router.navigate(['/lists']);
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
