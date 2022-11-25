import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImCallFormComponent } from './im-call-form.component';

describe('ImCallFormComponent', () => {
  let component: ImCallFormComponent;
  let fixture: ComponentFixture<ImCallFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImCallFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImCallFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
