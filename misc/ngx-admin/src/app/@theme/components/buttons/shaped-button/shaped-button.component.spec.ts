import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapedButtonComponent } from './shaped-button.component';

describe('ShapedButtonComponent', () => {
  let component: ShapedButtonComponent;
  let fixture: ComponentFixture<ShapedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
