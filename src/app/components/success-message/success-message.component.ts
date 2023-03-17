import { Component } from '@angular/core';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss'],
})
export class SuccessMessageComponent {
  message: string;
  successStatus: boolean = false;

  constructor(
    private successMessageToggleService: SuccessMessageToggleService
  ) {}
  ngOnInit() {
    this.successMessageToggleService.getMessage().subscribe((data: any) => {
      this.message = data.message;
      setTimeout(() => {
        this.successStatus = false;
      }, 2000);
      this.successStatus = true;
    });
  }
}
