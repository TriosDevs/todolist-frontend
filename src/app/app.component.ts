import {AfterViewInit, Component, DoCheck, ElementRef} from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  auth:boolean;;
  differ:any;
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
}
