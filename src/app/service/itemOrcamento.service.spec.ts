/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemOrcamentoService } from './itemOrcamento.service';

describe('Service: ItemOrcamento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemOrcamentoService]
    });
  });

  it('should ...', inject([ItemOrcamentoService], (service: ItemOrcamentoService) => {
    expect(service).toBeTruthy();
  }));
});
