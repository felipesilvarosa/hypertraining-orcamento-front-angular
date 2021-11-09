import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemOrcamentoService } from '../service/itemOrcamento.service';
import { ItemDetalhe } from '../service/models/item-detalhas.model';
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

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      let orcamentoRecebido = params.get('id');
      this.orcamentoId = orcamentoRecebido;
      this.getItensOrcamento();
    });
  }

  private getItensOrcamento() {
    return this.serviceItens
      .getItensOrcamento(this.orcamentoId)
      .subscribe((itens: ItemDetalhe[]) => {
        this.listaItens = itens;
      });
  }
}
