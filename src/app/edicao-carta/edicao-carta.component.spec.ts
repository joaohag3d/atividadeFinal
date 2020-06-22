import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoCartaComponent } from './edicao-carta.component';

describe('EdicaoCartaComponent', () => {
  let component: EdicaoCartaComponent;
  let fixture: ComponentFixture<EdicaoCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
