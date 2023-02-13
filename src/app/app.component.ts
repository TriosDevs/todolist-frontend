import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, KeyValueDiffers, OnChanges,Output} from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  auth:boolean;;
  differ:any;
  popupStats:boolean;
  constructor(private authService: AuthService,private elementRef: ElementRef) {
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
  }

  popupFunc(){

  }
}
