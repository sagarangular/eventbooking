import { TestBed } from '@angular/core/testing';

import { DefultService } from './defult.service';

describe('DefultService', () => {
  let service: DefultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
