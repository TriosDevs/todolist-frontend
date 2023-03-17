import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SuccessMessageToggleService {
  private subject = new Subject();
  openSuccessMessage(_message: string) {
    this.subject.next({ message: _message });
  }

  getMessage():any {
    return this.subject.asObservable();
  }
}
