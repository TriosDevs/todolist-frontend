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
  errorStatus:boolean = false
  loadingIndicator:boolean = false;
  errorMessage:string;
  constructor(private httpService: HttpService,private router: Router) {}

  onSubmit(form: NgForm) {
    this.errorStatus = false;
    this.loadingIndicator = true;
    setTimeout(()=>{

      if (form.value.password != form.value.passwordAgain){
        this.errorMessage = 'Passwords do not matches!';
        this.errorStatus = true;
        this.loadingIndicator = false;
        return;
      }

      const data = {   
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        password: form.value.password,
      };
      this.httpService.createHttpRequest('auth/register', 'POST', data).subscribe(
        (res) => {
          console.log(res)
          this.loadingIndicator = false;
          this.errorStatus = false;
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log(error.errors[0].message)
          this.errorStatus = true;
          this.loadingIndicator = false;
          this.errorMessage = error.errors[0].message;
          
  
        }
      );
  
    }, 3000)

  }
}
