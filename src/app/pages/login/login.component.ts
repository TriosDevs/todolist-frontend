import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage: string;
  errorStatus: boolean = false;
  loadingIndicator: boolean = false;
  constructor(
    private httpService: HttpService,
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit(form: NgForm) {
    this.errorStatus = false;
    this.loadingIndicator = true;
    const data = {
      email: form.value.email.trim(),
      password: form.value.password.trim(),
    };

    if (data.email.length == 0 || data.password.length == 0) {
      this.errorMessage = 'All areas must be filled!';
      this.errorStatus = true;
      this.loadingIndicator = false;
      return;
    }

    this.httpService.createHttpRequest('auth/login', 'POST', data).subscribe(
      (res) => {
        this.authService.setToken(res.jwtToken);
        this.loadingIndicator = false;
        this.errorStatus = false;
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorStatus = true;
        this.loadingIndicator = false;
        this.errorMessage = 'Email or password is invalid!';
      }
    );
  }
}
