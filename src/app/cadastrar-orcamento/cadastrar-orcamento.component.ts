import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Orcamento } from '../service/models/orcamento.model';
import { OrcamentoPost } from '../service/models/orcamentoPost.model';
import { OrcamentoRequisicaoPost } from '../service/models/orcamentoRequisicaoPost';
import { OrcamentoService } from '../service/orcamento.service';

@Component({
  selector: 'app-cadastrar-orcamento',
  templateUrl: './cadastrar-orcamento.component.html',
  styleUrls: ['./cadastrar-orcamento.component.scss'],
})
export class CadastrarOrcamentoComponent implements OnInit {
  @Output() aoCadastrar = new EventEmitter<any>();

  descricao!: string;
  mes!: number;
  ano!: number;
  valorTotalInformado!: number;
  itensOrcamentoCSV!: string;
  itensOrcamento!: any[];

  constructor(private service: OrcamentoService, private router: Router) {}

  cadastrarOrcamento() {
    const orcamentoTeste: OrcamentoPost = {
      descricao: this.descricao,
      mes: this.mes,
      ano: this.ano,
      valorTotalInformado: this.valorTotalInformado,
    };
    const orcamentoEmitido: OrcamentoRequisicaoPost = {
      orcamento: orcamentoTeste,
      itens: this.tratarItensOrcamento(),
    };

    this.service.cadastrar(orcamentoEmitido);
  }

  private tratarItensOrcamento() {
    const linhas: any[] = this.itensOrcamentoCSV.split('\n');
    return linhas.map((linha) => {
      const atributos: any = linha.split(';');
      return {
        origem: atributos[0],
        codigoItem: atributos[1],
        descricaoItem: atributos[2],
        quantidade: atributos[3],
        unidadeMedida: atributos[4],
        valorUnitario: atributos[5],
        valorTotalInformado: atributos[6],
      };
    });
  }

  ngOnInit(): void {}
}
