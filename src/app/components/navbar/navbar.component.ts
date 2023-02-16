import { Component, HostListener, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchInput: boolean;
  constructor(private authService: AuthService) {

  }

  onLogout() {
    this.authService.logout();
  }
  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {
    //console.log(element);
    if (element.classList.contains('ddown')) {
      console.log($('.navbar-dropdown').hasClass('show'));
      if (!$('.navbar-dropdown').hasClass('show')) {
        $('.navbar-dropdown').addClass('show');
        $('.dropdown-wrapper').addClass('show-hover');
      } else {
        $('.navbar-dropdown').removeClass('show');
        $('.dropdown-wrapper').removeClass('show-hover');
      }
    } else {
      $('.navbar-dropdown').removeClass('show');
      $('.dropdown-wrapper').removeClass('show-hover');
    }
  }

  onSwitch() {
    this.searchInput = !this.searchInput;
  }

  ngAfterViewInit() {

  }
}
