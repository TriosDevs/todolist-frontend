import {AfterViewInit, Component, DoCheck, ElementRef} from '@angular/core';
import { AuthService } from './services/auth.service';
import { PopupService } from './services/popup.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  auth:boolean;;
  differ:any;
  constructor(private authService: AuthService,private elementRef: ElementRef,private popupService: PopupService) {
      this.auth = authService.loggedIn;
  }
  ngDoCheck() {
    this.auth = this.authService.loggedIn;
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = '#F1EBEB';
    this.elementRef.nativeElement.ownerDocument
      .body.style.userSelect = 'none';
      this.popupService.getMessage().subscribe(e=>{
        if (e.status){
          this.elementRef.nativeElement.ownerDocument
      .body.style.overflow = 'hidden';
        }else{
          this.elementRef.nativeElement.ownerDocument
      .body.style.overflow = 'inherit';
        }
      })
      
  }
}
