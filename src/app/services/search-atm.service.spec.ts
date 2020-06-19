import { TestBed } from '@angular/core/testing';

import { SearchAtmService } from './search-atm.service';

describe('SearchAtmService', () => {
  let service: SearchAtmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAtmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
