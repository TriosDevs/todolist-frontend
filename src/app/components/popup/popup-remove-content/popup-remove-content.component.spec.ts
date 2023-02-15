import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRemoveContentComponent } from './popup-remove-content.component';

describe('PopupRemoveContentComponent', () => {
  let component: PopupRemoveContentComponent;
  let fixture: ComponentFixture<PopupRemoveContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupRemoveContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupRemoveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
