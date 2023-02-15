import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PopupService {
  private subject = new Subject();

  changePopupStatus(_status: boolean,_type:string,_target:string) {
    this.subject.next({ status: _status,type:_type,target:_target });
  }

  getMessage():any {
    return this.subject.asObservable();
  }
}
