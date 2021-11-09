import { DetalharOrcamentoComponent } from './detalhar-orcamento/detalhar-orcamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrcamentoTabelaComponent } from './orcamento-tabela/orcamento-tabela.component';

const routes: Routes = [
  { path: '', redirectTo: 'orcamentos', pathMatch: 'full' },
  { path: 'orcamentos', component: OrcamentoTabelaComponent },
  { path: 'detalhar-orcamento/:id', component: DetalharOrcamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
