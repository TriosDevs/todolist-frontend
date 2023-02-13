import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { PopupService } from '../popup.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  @Output() popupStatus = EventEmitter<boolean>;
  constructor(private httpService:HttpService,private popupService:PopupService){}

  ngOnInit(){
    this.httpService.createHttpRequest('/api/user',"GET",{}).subscribe(res =>{
      console.log(res);
    },error =>{
      console.log(error);
    })
  }

  openPopup(){
      this.popupService.changePopupStatus(true);
  }

}
