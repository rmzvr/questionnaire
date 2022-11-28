import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalPanelComponent } from './additional-panel.component';

describe('AdditionalPanelComponent', () => {
  let component: AdditionalPanelComponent;
  let fixture: ComponentFixture<AdditionalPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
