import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNsiProfileComponent } from './create-nsi-profile.component';

describe('CreateNsiProfileComponent', () => {
  let component: CreateNsiProfileComponent;
  let fixture: ComponentFixture<CreateNsiProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNsiProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNsiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
