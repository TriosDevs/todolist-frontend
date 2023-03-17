import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class ListsService {
  private subject = new Subject();

  constructor(private httpService: HttpService) {}

  fetchData() {
    this.httpService.createHttpRequest('api/v1/lists', 'GET', {}).subscribe(
      (res) => {
        console.log(res);
        this.subject.next({
          data: res,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getData(): any {
    return this.subject.asObservable();
  }
}
