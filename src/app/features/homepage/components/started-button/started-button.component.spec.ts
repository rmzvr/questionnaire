import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedButtonComponent } from './started-button.component';

describe('StartedButtonComponent', () => {
  let component: StartedButtonComponent;
  let fixture: ComponentFixture<StartedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartedButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
