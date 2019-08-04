import { TestBed } from '@angular/core/testing';

import { EmployeesService } from './employees.service';

describe('CollaborateursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeesService = TestBed.get(EmployeesService);
    expect(service).toBeTruthy();
  });
});
