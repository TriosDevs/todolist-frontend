import {
  AfterViewInit,
  ApplicationRef,
  Component,
  DoCheck,
  ElementRef,
  HostListener,
  Injector,
} from '@angular/core';
import { AuthService } from './services/auth.service';
import { PopupService } from './services/popup.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  auth: boolean;
  differ: any;

  constructor(
    private authService: AuthService,
    private elementRef: ElementRef,
    private popupService: PopupService
  ) {
    this.auth = authService.loggedIn;
  }
  ngDoCheck() {
    this.auth = this.authService.loggedIn;
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#F1EBEB';
    this.elementRef.nativeElement.ownerDocument.body.style.userSelect = 'none';
    this.popupService.getMessage().subscribe((e) => {
      if (e.status) {
        this.elementRef.nativeElement.ownerDocument.body.style.overflow =
          'hidden';
      } else {
        this.elementRef.nativeElement.ownerDocument.body.style.overflow =
          'inherit';
      }
    });
  }

  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {

    if (element.classList.contains('list-dots')) {
      let dropdown =
        element.parentElement.parentElement.parentElement.children[3]
          .children[0];

      if (dropdown.classList.contains('show')) {
        $('.list-dots-dropdown').removeClass('show');
      }else{
        $('.list-dots-dropdown').removeClass('show');
        dropdown.classList.add('show')
      }

    } else {
      $('.list-dots-dropdown').removeClass('show');
    }
  }
}
