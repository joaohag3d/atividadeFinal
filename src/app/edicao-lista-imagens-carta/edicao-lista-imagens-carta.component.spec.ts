import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoListaImagensCartaComponent } from './edicao-lista-imagens-carta.component';

describe('EdicaoListaImagensCartaComponent', () => {
  let component: EdicaoListaImagensCartaComponent;
  let fixture: ComponentFixture<EdicaoListaImagensCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoListaImagensCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoListaImagensCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
