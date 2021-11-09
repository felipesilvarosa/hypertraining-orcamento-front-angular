import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharOrcamentoComponent } from './detalhar-orcamento.component';

describe('DetalharOrcamentoComponent', () => {
  let component: DetalharOrcamentoComponent;
  let fixture: ComponentFixture<DetalharOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharOrcamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
