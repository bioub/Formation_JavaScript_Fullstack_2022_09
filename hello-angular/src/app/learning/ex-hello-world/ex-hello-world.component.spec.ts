import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExHelloWorldComponent } from './ex-hello-world.component';

describe('ExHelloWorldComponent', () => {
  let component: ExHelloWorldComponent;
  let fixture: ComponentFixture<ExHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExHelloWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
