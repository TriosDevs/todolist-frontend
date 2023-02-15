import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUpdateContentComponent } from './popup-update-content.component';

describe('PopupUpdateContentComponent', () => {
  let component: PopupUpdateContentComponent;
  let fixture: ComponentFixture<PopupUpdateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupUpdateContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupUpdateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
