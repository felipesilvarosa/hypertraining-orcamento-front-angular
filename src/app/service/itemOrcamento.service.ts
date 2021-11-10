import { ItemDetalhe } from './models/item-detalhas.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ItemOrcamentoService {
  private itensOrcamento: ItemDetalhe[];
  private urlItemOrcamento = '/api/orcamentos/:id/itens-orcamento';
  private urlInconsistencia = '/api/orcamentos/:id/inconsistencias';

  constructor(private httpClient: HttpClient) {
    this.itensOrcamento = [];
  }

  getItensOrcamento(id: any): Observable<ItemDetalhe[]> {
    return this.httpClient.get<ItemDetalhe[]>(
      this.urlItemOrcamento.replace(':id', id.toString())
    );
  }
  getInconsistencia(id: any): Observable<String[]> {
    return this.httpClient.get<String[]>(
      this.urlInconsistencia.replace(':id', id.toString())
    );
  }
}
