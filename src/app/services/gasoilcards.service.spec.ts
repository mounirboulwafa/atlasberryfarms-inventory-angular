import { TestBed } from '@angular/core/testing';

import { GasoilcardsService } from './gasoilcards.service';

describe('GasoilcardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GasoilcardsService = TestBed.get(GasoilcardsService);
    expect(service).toBeTruthy();
  });
});
