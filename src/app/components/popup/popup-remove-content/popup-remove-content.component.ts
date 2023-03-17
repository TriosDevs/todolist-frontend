import { Component, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-popup-remove-content',
  templateUrl: './popup-remove-content.component.html',
  styleUrls: ['./popup-remove-content.component.scss'],
})
export class PopupRemoveContentComponent {
  @Input() popup: { status: boolean; type: string; target: string; data: any };
  header: string;

  constructor(
    private popupService: PopupService,
    private httpService: HttpService,
    private router: Router
  ) {}

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

  removeList() {
    this.httpService
      .createHttpRequest('api/v1/lists/' + this.popup.data.id, 'DELETE',{})
      .subscribe(
        (res) => {
          console.log(res);
          //this.router.navigate(['/lists']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
