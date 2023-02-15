import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-popup-create-content',
  templateUrl: './popup-create-content.component.html',
  styleUrls: ['./popup-create-content.component.scss']
})
export class PopupCreateContentComponent {
  @Input() popup:{status:boolean,type:string,target:string};
  header: string;

  ngOnInit() {
    switch (this.popup.target) {
      case 'list':
        this.header = 'Give a name to your list';
        break;
      case 'task':
        this.header = 'Give a name to your task';
        break;
    }
}

}
