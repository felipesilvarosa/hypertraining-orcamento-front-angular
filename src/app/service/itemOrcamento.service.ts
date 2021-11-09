import { ItemDetalhe } from './models/item-detalhas.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ItemOrcamentoService {
  private itensOrcamento: ItemDetalhe[];
  private url = '/api/orcamentos/:id/itens-orcamento';

  constructor(private httpClient: HttpClient) {
    this.itensOrcamento = [];
  }

  getItensOrcamento(id: any): Observable<ItemDetalhe[]> {
    return this.httpClient.get<ItemDetalhe[]>(
      this.url.replace(':id', id.toString())
    );
  }
}
