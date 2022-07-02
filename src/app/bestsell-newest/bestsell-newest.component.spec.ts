/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BestsellNewestComponent } from './bestsell-newest.component';

describe('BestsellNewestComponent', () => {
  let component: BestsellNewestComponent;
  let fixture: ComponentFixture<BestsellNewestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestsellNewestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellNewestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
