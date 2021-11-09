import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOrcamentoComponent } from './cadastrar-orcamento.component';

describe('CadastrarOrcamentoComponent', () => {
  let component: CadastrarOrcamentoComponent;
  let fixture: ComponentFixture<CadastrarOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarOrcamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
