import { OrcamentoRequisicaoPost } from './models/orcamentoRequisicaoPost';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Orcamento } from './models/orcamento.model';

@Injectable({
  providedIn: 'root',
})
export class OrcamentoService {
  private listaOrcamento: Orcamento[];
  private url = '/api/orcamentos';

  constructor(private httpClient: HttpClient) {
    this.listaOrcamento = [];
  }

  get listaOrcamentos() {
    return this.listaOrcamento;
  }

  listarTodos(): Observable<Orcamento[]> {
    return this.httpClient.get<Orcamento[]>(this.url);
  }

  listarPorId(id: number): Observable<Orcamento> {
    const urlGet = `${this.url}/${id}`;
    return this.httpClient.get<Orcamento>(urlGet);
  }

  cadastrar(orcamento: OrcamentoRequisicaoPost): Observable<any> {
    return this.httpClient.post<OrcamentoRequisicaoPost>(this.url, orcamento);
  }

  delete(id: number): void {
    const urlDelete = `${this.url}/${id}`;
    this.httpClient.delete(urlDelete).subscribe(() => {
      this.listaOrcamento = this.listaOrcamento.filter(
        (item) => item.id !== id
      );
    });
  }
}
