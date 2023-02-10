import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  trying: boolean = true;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordAgain: string;
  showErrorMessage: boolean;

  registerHandler(){
    console.log(this.firstName);
  }

}
