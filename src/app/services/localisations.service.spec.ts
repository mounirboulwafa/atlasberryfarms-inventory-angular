import { TestBed } from '@angular/core/testing';

import { LocalisationsService } from './localisations.service';

describe('LocalisationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalisationsService = TestBed.get(LocalisationsService);
    expect(service).toBeTruthy();
  });
});
