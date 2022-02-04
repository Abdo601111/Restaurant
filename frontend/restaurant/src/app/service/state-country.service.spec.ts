import { TestBed } from '@angular/core/testing';

import { StateCountryService } from './state-country.service';

describe('StateCountryService', () => {
  let service: StateCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
