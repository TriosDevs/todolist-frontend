import { Component,OnInit} from '@angular/core';
import { HttpService } from '../../services/http.service';
import { PopupService } from '../../services/popup.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  name:string;
  surname:string;
  email:string;

  constructor(private httpService:HttpService,private popupService:PopupService){
  }

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

  openPopup(){
      this.popupService.changePopupStatus(true,'remove','profile');
  }

}
