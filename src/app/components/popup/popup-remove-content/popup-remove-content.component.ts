import { Component, EventEmitter, Input } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-popup-remove-content',
  templateUrl: './popup-remove-content.component.html',
  styleUrls: ['./popup-remove-content.component.scss'],
})
export class PopupRemoveContentComponent {
  @Input() popup:{status:boolean,type:string,target:string};
  header: string;

  constructor(private popupService: PopupService) {}

  ngOnInit() {

      switch (this.popup.target) {
        case 'profile':
          this.header = 'Are you sure that you remove your account?';
          break;
        case 'list':
          this.header = 'Are you sure that you remove this list?';
          break;
        case 'task':
          this.header = 'Are you sure that you remove this task?';
          break;
      }
   
  }
}
