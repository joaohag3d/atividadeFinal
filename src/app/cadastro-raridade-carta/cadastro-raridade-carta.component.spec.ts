import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRaridadeCartaComponent } from './cadastro-raridade-carta.component';

describe('CadastroRaridadeCartaComponent', () => {
  let component: CadastroRaridadeCartaComponent;
  let fixture: ComponentFixture<CadastroRaridadeCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroRaridadeCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroRaridadeCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
