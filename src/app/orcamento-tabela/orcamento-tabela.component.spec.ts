import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoTabelaComponent } from './orcamento-tabela.component';

describe('OrcamentoTabelaComponent', () => {
  let component: OrcamentoTabelaComponent;
  let fixture: ComponentFixture<OrcamentoTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrcamentoTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
