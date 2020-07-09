import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNsiProfileComponent } from './search-nsi-profile.component';

describe('SearchNsiProfileComponent', () => {
  let component: SearchNsiProfileComponent;
  let fixture: ComponentFixture<SearchNsiProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNsiProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNsiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
