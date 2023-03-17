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

    // for task dropdown
    if (element.classList.contains('task-edit-img')) {
      let dropdown = element.parentElement.children[1];

      if (element.classList.contains('show')) {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
          $('.task-edit-img').removeClass('show');
        } else {
          dropdown.classList.add('show');
        }
      } else {
        $('.task-edit-img').removeClass('show');
        if (dropdown.classList.contains('show')) {
          $('.task-edit-dropdown').removeClass('show');
        } else {
          $('.task-edit-dropdown').removeClass('show');
          dropdown.classList.add('show');
          element.classList.add('show');
        }
      }
    } else {
      $('.task-edit-dropdown').removeClass('show');
      $('.task-edit-img').removeClass('show');
    }
  }

}
