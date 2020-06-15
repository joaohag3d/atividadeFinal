import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoImagemCartaComponent } from './edicao-imagem-carta.component';

describe('EdicaoImagemCartaComponent', () => {
  let component: EdicaoImagemCartaComponent;
  let fixture: ComponentFixture<EdicaoImagemCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoImagemCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoImagemCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
