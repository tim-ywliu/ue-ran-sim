import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNssRuleComponent } from './table-nss-rule.component';

describe('TableNssRuleComponent', () => {
  let component: TableNssRuleComponent;
  let fixture: ComponentFixture<TableNssRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableNssRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNssRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
