import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrcamentoTabelaComponent } from './orcamento-tabela/orcamento-tabela.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarOrcamentoComponent } from './cadastrar-orcamento/cadastrar-orcamento.component';
import { FormsModule } from '@angular/forms';
import { DetalharOrcamentoComponent } from './detalhar-orcamento/detalhar-orcamento.component';

@NgModule({
  declarations: [
    AppComponent,
    OrcamentoTabelaComponent,
    CadastrarOrcamentoComponent,
    DetalharOrcamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
