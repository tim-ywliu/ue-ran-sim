import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNsiProfileComponent } from './table-nsi-profile.component';

describe('TableNsiProfileComponent', () => {
  let component: TableNsiProfileComponent;
  let fixture: ComponentFixture<TableNsiProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableNsiProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNsiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
