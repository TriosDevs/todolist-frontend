import { Component,EventEmitter,Output } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  //encapsulation:ViewEncapsulation.Emulated
})
export class ListComponent {
  dropdownStatus:boolean;

  constructor(private popupSerive:PopupService){}

  onChangeStatusOfDotsDropdown() {
    console.log(this.dropdownStatus);
    //this.dropdownStatus = !this.dropdownStatus;
  }

  openPopupForEditingList(){
    //this.dropdownStatus = !this.dropdownStatus;
    this.popupSerive.changePopupStatus(true,'update','list')
  }

  openPopupForRemovingList(){
    //this.dropdownStatus = !this.dropdownStatus;
    this.popupSerive.changePopupStatus(true,'remove','list')
  }

}
