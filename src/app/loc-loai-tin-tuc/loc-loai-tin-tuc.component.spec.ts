/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LocLoaiTinTucComponent } from './loc-loai-tin-tuc.component';

describe('LocLoaiTinTucComponent', () => {
  let component: LocLoaiTinTucComponent;
  let fixture: ComponentFixture<LocLoaiTinTucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocLoaiTinTucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocLoaiTinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
