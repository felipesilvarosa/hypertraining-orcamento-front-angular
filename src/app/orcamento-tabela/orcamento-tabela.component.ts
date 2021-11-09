import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orcamento } from '../service/models/orcamento.model';
import { OrcamentoService } from '../service/orcamento.service';

@Component({
  selector: 'app-orcamento-tabela',
  templateUrl: './orcamento-tabela.component.html',
  styleUrls: ['./orcamento-tabela.component.scss'],
})
export class OrcamentoTabelaComponent implements OnInit {
  orcamentos: Orcamento[] = [];
  display = false;

  constructor(private service: OrcamentoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listarTodos().subscribe((orcamentos: Orcamento[]) => {
      this.orcamentos = orcamentos;
    });
  }

  update() {
    this.display = !this.display;
  }

  deleteById(id: number) {
    this.service.delete(id);

    //refatorar
    window.location.reload();
  }

  onSelect(id: number) {
    this.router.navigate(['/detalhar-orcamento', id]);
  }
}
