import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  popupStatus: boolean;

  constructor(private popupService: PopupService) {}
  ngOnInit() {
    this.popupService.getMessage().subscribe(e=>{
      this.popupStatus = e.text;
    })
  }

  changePopupStatus() {
    this.popupService.changePopupStatus(false);
  }
}
