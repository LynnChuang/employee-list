/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EmployeeFormComponent } from './employee-form.component';

describe('Component: EmployeeForm', () => {
  it('should create an instance', () => {
    let component = new EmployeeFormComponent();
    expect(component).toBeTruthy();
  });
});
