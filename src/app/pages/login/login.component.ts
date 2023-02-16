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
  successMessage:{message:string,status:boolean}={
    message: '',
    status: false
  };
  errorStatus:boolean = false
  loadingIndicator:boolean = false;
  constructor(private httpService: HttpService,private router: Router,private authService:AuthService) {}

  onSubmit(form: NgForm) {

    this.loadingIndicator = true;
    setTimeout(()=>{

      const data = {
        mail: form.value.email,
        password: form.value.password,
      };
      this.httpService.createHttpRequest('/auth/login', 'POST', data).subscribe(
        (res) => {
          this.authService.setToken(res.content.toString());
          this.successMessage.message = '';
          this.successMessage.status = false;
          console.log('login-page ' + (new Date()).getTime());
          this.router.navigate(['/']);
          
        },
        (error) => {
          this.successMessage.message = error;
          this.successMessage.status = true;
          this.loadingIndicator = false;
  
        }
      );
  
    }, 3000)

  }
}
