import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  auth:boolean
  constructor(private elementRef: ElementRef) {
    this.auth = false
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = '#F1EBEB';
    this.elementRef.nativeElement.ownerDocument
      .body.style.userSelect = 'none';
  }
}
