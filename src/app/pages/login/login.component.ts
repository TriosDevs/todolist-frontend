import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage:string;
  errorStatus:boolean = false
  loadingIndicator:boolean = false;
  constructor(private httpService: HttpService,private router: Router,private authService:AuthService) {}

  onSubmit(form: NgForm) {
    /*const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });*/
    this.loadingIndicator = true;
    setTimeout(()=>{

      const data = {
        mail: form.value.email,
        password: form.value.password,
      };
      this.httpService.createHttpRequest('/auth/login', 'POST', data).subscribe(
        (res) => {
          this.authService.setToken(res.content.toString());
          this.errorStatus = true;
          this.loadingIndicator = false;
          this.router.navigate(['/']);
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
