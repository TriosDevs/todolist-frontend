import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {

  constructor(private popupService: PopupService){}

  openPopup(){
    this.popupService.changePopupStatus(true);
  }

}
