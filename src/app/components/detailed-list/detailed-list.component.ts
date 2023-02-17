import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-detailed-list',
  templateUrl: './detailed-list.component.html',
  styleUrls: ['./detailed-list.component.scss']
})
export class DetailedListComponent {

  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.changePopupStatus(true,'create','task');
  }

}
