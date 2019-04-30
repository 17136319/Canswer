import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumnPage } from './forumn.page';

describe('ForumnPage', () => {
  let component: ForumnPage;
  let fixture: ComponentFixture<ForumnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
