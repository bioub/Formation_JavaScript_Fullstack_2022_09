import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExMultiStateButtonComponent } from './ex-multi-state-button.component';

describe('ExMultiStateButtonComponent', () => {
  let component: ExMultiStateButtonComponent;
  let fixture: ComponentFixture<ExMultiStateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExMultiStateButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExMultiStateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
