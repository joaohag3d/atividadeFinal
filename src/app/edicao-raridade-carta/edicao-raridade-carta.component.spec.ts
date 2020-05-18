import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoRaridadeCartaComponent } from './edicao-raridade-carta.component';

describe('EdicaoRaridadeCartaComponent', () => {
  let component: EdicaoRaridadeCartaComponent;
  let fixture: ComponentFixture<EdicaoRaridadeCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoRaridadeCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoRaridadeCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
