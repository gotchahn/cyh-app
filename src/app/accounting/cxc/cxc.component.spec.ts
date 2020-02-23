import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxcComponent } from './cxc.component';

describe('CxcComponent', () => {
  let component: CxcComponent;
  let fixture: ComponentFixture<CxcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
