import { Component,Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  active:boolean = false
  searchInput:boolean;
  constructor(private authService: AuthService){}
  activeNavLink(){
    this.active = !this.active
  }
  onLogout(){
    this.authService.logout();
  }
  onSwitch(){
    this.searchInput = !this.searchInput
  }
}

