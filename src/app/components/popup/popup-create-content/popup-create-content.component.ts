import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-popup-create-content',
  templateUrl: './popup-create-content.component.html',
  styleUrls: ['./popup-create-content.component.scss'],
})
export class PopupCreateContentComponent {
  @Input() popup: { status: boolean; type: string; target: string; data: any };
  header: string;
  loadingIndicator: boolean;

  constructor(private httpService: HttpService, private router: Router) {}

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
    this.httpService.createHttpRequest('api/v1/lists', 'POST', data).subscribe(
      (res) => {
        console.log(res);
        this.loadingIndicator = false;
        this.router.navigate(['/lists']);
      },
      (error) => {
        console.log(error);
        this.loadingIndicator = false;
      }
    );
  }
}
