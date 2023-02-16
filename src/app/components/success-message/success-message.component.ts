import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss']
})
export class SuccessMessageComponent {
  @Input() message:{message:string,status:boolean};

  ngOnInit(){
    console.log('called');
  }
}
