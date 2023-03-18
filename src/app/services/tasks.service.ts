import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private subject = new Subject();

  constructor(private httpService: HttpService) {}

  fetchData(listid: string) {
    this.httpService
      .createHttpRequest('api/v1/tasks?listId=' + listid, 'GET', {})
      .subscribe(
        (res) => {
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
