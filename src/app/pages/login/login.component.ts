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
    private authService: AuthService,
    private http: HttpClient
  ) {}

  onSubmit(form: NgForm) {
    this.errorStatus = false;
    this.loadingIndicator = true;
    const data = {
      email: form.value.email,
      password: form.value.password,
    };

    setTimeout(() => {
      this.httpService.createHttpRequest('auth/login', 'POST', data).subscribe(
        (res) => {
          console.log(res);
          this.authService.setToken(res.jwtToken);
          this.loadingIndicator = false;
          this.errorStatus = false;
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.errorStatus = true;
          this.loadingIndicator = false;
          this.errorMessage = error.errors[0].message;
        }
      );
    }, 3000);
  }
}
