import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNssRuleComponent } from './create-nss-rule.component';

describe('CreateNssRuleComponent', () => {
  let component: CreateNssRuleComponent;
  let fixture: ComponentFixture<CreateNssRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNssRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNssRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
