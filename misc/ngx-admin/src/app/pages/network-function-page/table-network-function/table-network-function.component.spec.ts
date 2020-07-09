import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNetworkFunctionComponent } from './table-network-function.component';

describe('TableNetworkFunctionComponent', () => {
  let component: TableNetworkFunctionComponent;
  let fixture: ComponentFixture<TableNetworkFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableNetworkFunctionComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNetworkFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
