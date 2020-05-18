import { TestBed } from '@angular/core/testing';

import { InformacaoCartaService } from './informacao-carta.service';

describe('InformacaoCartaService', () => {
  let service: InformacaoCartaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacaoCartaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
