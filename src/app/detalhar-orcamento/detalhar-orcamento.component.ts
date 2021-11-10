import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemOrcamentoService } from '../service/itemOrcamento.service';
import { ItemDetalhe } from '../service/models/item-detalhas.model';
import { Orcamento } from '../service/models/orcamento.model';
import { OrcamentoService } from '../service/orcamento.service';

@Component({
  selector: 'app-detalhar-orcamento',
  templateUrl: './detalhar-orcamento.component.html',
  styleUrls: ['./detalhar-orcamento.component.scss'],
})
export class DetalharOrcamentoComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private serviceOrcamento: OrcamentoService,
    private serviceItens: ItemOrcamentoService
  ) {}

  orcamentoId: any;
  listaItens: ItemDetalhe[] = [];
  listaInconsistencias: String[] = [];
  orcamento!: Orcamento;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      let orcamentoRecebido = params.get('id');
      this.orcamentoId = orcamentoRecebido;
      this.getItensOrcamento();
      this.getInconsistencias();
      this.getOrcamentoById();
    });
  }

  private getItensOrcamento() {
    return this.serviceItens
      .getItensOrcamento(this.orcamentoId)
      .subscribe((itens: ItemDetalhe[]) => {
        this.listaItens = itens;
      });
  }

  private getInconsistencias() {
    return this.serviceItens
      .getInconsistencia(this.orcamentoId)
      .subscribe((inconsistencias: String[]) => {
        this.listaInconsistencias = inconsistencias;
      });
  }

  private getOrcamentoById() {
    this.serviceOrcamento
      .listarPorId(this.orcamentoId)
      .subscribe((orcamento: Orcamento) => {
        this.orcamento = orcamento;
      });
  }
}
