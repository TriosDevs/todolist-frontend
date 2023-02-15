import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreateContentComponent } from './popup-create-content.component';

describe('PopupCreateContentComponent', () => {
  let component: PopupCreateContentComponent;
  let fixture: ComponentFixture<PopupCreateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCreateContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCreateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
