import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-popup-create-content',
  templateUrl: './popup-create-content.component.html',
  styleUrls: ['./popup-create-content.component.scss'],
})
export class PopupCreateContentComponent {
  @Input() popup: { status: boolean; type: string; target: string };
  header: string;
  loadingIndicator: boolean;

  constructor(private httpService: HttpService) {}

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

  createList(form: NgForm) {
    let data = {
      name: form.value.name,
    };

    this.loadingIndicator = true;
    this.httpService.createHttpRequest('api/v1/lists/8', 'PUT', data).subscribe(
      (res) => {
        console.log(res);
        this.loadingIndicator = false;
      },
      (error) => {
        console.log(error);
        this.loadingIndicator = false;
      }
    );
  }
}
