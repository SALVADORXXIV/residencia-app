import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirreccionPage } from './dirreccion.page';

describe('DirreccionPage', () => {
  let component: DirreccionPage;
  let fixture: ComponentFixture<DirreccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirreccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirreccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
