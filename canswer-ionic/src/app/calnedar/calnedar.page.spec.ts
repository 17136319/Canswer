import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalnedarPage } from './calnedar.page';

describe('CalnedarPage', () => {
  let component: CalnedarPage;
  let fixture: ComponentFixture<CalnedarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalnedarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalnedarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
