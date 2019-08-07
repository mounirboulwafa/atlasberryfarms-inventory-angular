import { TestBed } from '@angular/core/testing';

import { AffectationsService } from './affectations.service';

describe('AffectationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffectationsService = TestBed.get(AffectationsService);
    expect(service).toBeTruthy();
  });
});
