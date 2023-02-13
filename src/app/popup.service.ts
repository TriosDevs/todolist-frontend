import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PopupService {
  private subject = new Subject();

  changePopupStatus(message: boolean) {
    this.subject.next({ text: message });
  }

  sendMessage(message: boolean) {
    this.subject.next({ text: message });
  }

  getMessage():any {
    return this.subject.asObservable();
  }
}
