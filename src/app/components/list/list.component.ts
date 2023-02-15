import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  dropdownStatus: boolean;

  constructor(private popupSerive:PopupService){}

  onChangeStatusOfDotsDropdown() {
    this.dropdownStatus = !this.dropdownStatus;
  }

  openPopupForEditingList(){
    this.dropdownStatus = !this.dropdownStatus;
    this.popupSerive.changePopupStatus(true,'update','list')
  }

  openPopupForRemovingList(){
    this.dropdownStatus = !this.dropdownStatus;
    this.popupSerive.changePopupStatus(true,'remove','list')
  }
}
