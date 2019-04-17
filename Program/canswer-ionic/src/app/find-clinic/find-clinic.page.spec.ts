import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindClinicPage } from './find-clinic.page';

describe('FindClinicPage', () => {
  let component: FindClinicPage;
  let fixture: ComponentFixture<FindClinicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindClinicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindClinicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
