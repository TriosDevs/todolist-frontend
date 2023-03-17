import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-popup-update-content',
  templateUrl: './popup-update-content.component.html',
  styleUrls: ['./popup-update-content.component.scss'],
})
export class PopupUpdateContentComponent {
  @Input() popup: { status: boolean; type: string; target: string; data:any };
  header: string;

  constructor(private httpService: HttpService, private router: Router) {}

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

  updateList(form: NgForm) {
    let data = {
      name: form.value.name,
    };

    this.httpService.createHttpRequest('api/v1/lists/' + this.popup.data.id, 'PUT', data).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/lists']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
