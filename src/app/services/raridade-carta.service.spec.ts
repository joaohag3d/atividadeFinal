import { TestBed } from '@angular/core/testing';

import { RaridadeCartaService } from './raridade-carta.service';

describe('RaridadeCartaService', () => {
  let service: RaridadeCartaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaridadeCartaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
