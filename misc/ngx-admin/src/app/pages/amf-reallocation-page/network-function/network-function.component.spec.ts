import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkFunctionComponent } from './network-function.component';

describe('NetworkFunctionComponent', () => {
  let component: NetworkFunctionComponent;
  let fixture: ComponentFixture<NetworkFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkFunctionComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
