import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  errorStatus:boolean = false
  loadingIndicator:boolean = false;
  errorMessage:string;
  constructor(private httpService: HttpService,private router: Router) {}

  onSubmit(form: NgForm) {
    /*const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });*/
    this.loadingIndicator = true;
    setTimeout(()=>{

      if (form.value.password != form.value.passwordAgain){
        this.errorMessage = 'Passwords do not matches!';
        this.loadingIndicator = false;
        return;
      }

      const data = {
        name: form.value.firstName,
        surname: form.value.lastName,
        mail: form.value.email,
        password: form.value.password,
      };
      this.httpService.createHttpRequest('/auth', 'POST', data).subscribe(
        (res) => {
          this.loadingIndicator = false;
          this.router.navigate(['/login']);
        },
        (error) => {
          this.errorMessage = error;
          this.errorStatus = true;
          this.loadingIndicator = false;
  
        }
      );
  
    }, 3000)

  }
}
