import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNssRuleComponent } from './detail-nss-rule.component';

describe('DetailNssRuleComponent', () => {
  let component: DetailNssRuleComponent;
  let fixture: ComponentFixture<DetailNssRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNssRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailNssRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
