import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCartaComponent } from './cadastro-carta.component';

describe('CadastroCartaComponent', () => {
  let component: CadastroCartaComponent;
  let fixture: ComponentFixture<CadastroCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
