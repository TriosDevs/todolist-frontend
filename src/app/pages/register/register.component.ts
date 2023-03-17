import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  errorStatus: boolean = false;
  loadingIndicator: boolean = false;
  errorMessage: string;
  constructor(private httpService: HttpService, private router: Router) {}

  onSubmit(form: NgForm) {
    this.errorStatus = false;
    this.loadingIndicator = true;

    const data = {
      firstName: form.value.firstName.trim(),
      lastName: form.value.lastName.trim(),
      email: form.value.email.trim(),
      password: form.value.password.trim(),
    };

    if (
      data.firstName.length == 0 ||
      data.lastName.length == 0 ||
      data.email.length == 0 ||
      data.password.length == 0 ||
      form.value.passwordAgain.trim().length == 0
    ) {
      this.errorMessage = 'All areas must be filled!';
      this.errorStatus = true;
      this.loadingIndicator = false;
      return;
    }

    if (data.password != form.value.passwordAgain.trim()) {
      this.errorMessage = 'Passwords do not matches!';
      this.errorStatus = true;
      this.loadingIndicator = false;
      return;
    }

    this.httpService.createHttpRequest('auth/register', 'POST', data).subscribe(
      (res) => {
        this.loadingIndicator = false;
        this.errorStatus = false;
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorStatus = true;
        this.loadingIndicator = false;
        this.errorMessage = 'Email is already taken!';
      }
    );
  }
}
