import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInformacaoCartaComponent } from './cadastro-informacao-carta.component';

describe('CadastroInformacaoCartaComponent', () => {
  let component: CadastroInformacaoCartaComponent;
  let fixture: ComponentFixture<CadastroInformacaoCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroInformacaoCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroInformacaoCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
