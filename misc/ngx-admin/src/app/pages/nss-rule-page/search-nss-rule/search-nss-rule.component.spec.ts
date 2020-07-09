import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNssRuleComponent } from './search-nss-rule.component';

describe('SearchNssRuleComponent', () => {
  let component: SearchNssRuleComponent;
  let fixture: ComponentFixture<SearchNssRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNssRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNssRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
