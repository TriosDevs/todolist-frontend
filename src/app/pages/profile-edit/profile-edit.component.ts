import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent {
  name:string;
  surname:string;
  email:string;

  constructor(private httpService:HttpService,private authService:AuthService){}

  ngOnInit(){
    
    this.httpService.createHttpRequest('/api/user',"GET",{}).subscribe(res =>{
      console.log(res);
      this.name = res.firstName;
      this.surname = res.lastName;
      this.email = res.mail;
    },error =>{
      console.log(error);
    })
  }

  onSubmit(form: NgForm) {
    const data = {
      name: form.value.name,
      surname: form.value.surname,
      mail: form.value.email,
    };
    this.httpService.createHttpRequest('/api/user','PUT',data).subscribe(res =>{
      console.log(res);
    },error =>{
      console.log(error);
    })
    /*this.loadingIndicator = true;
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
  
    }, 3000)*/

  }

}
