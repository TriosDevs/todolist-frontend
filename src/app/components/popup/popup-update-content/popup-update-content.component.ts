import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-popup-update-content',
  templateUrl: './popup-update-content.component.html',
  styleUrls: ['./popup-update-content.component.scss']
})
export class PopupUpdateContentComponent {
  @Input() popup:{status:boolean,type:string,target:string};
  header: string;

  ngOnInit() {
    switch (this.popup.target) {
      case 'list':
        this.header = 'Update the list’s name';
        break;
      case 'task':
        this.header = 'Update the task’s name';
        break;
    }
}

}
