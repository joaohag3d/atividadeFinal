import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, FormBuilder, Validators } from '@angular/forms';
import { RaridadeCartaService } from '../services/raridade-carta.service';
import { Carta } from '../models/carta.model';
import { Observable } from 'rxjs';
import { RaridadeCarta } from '../models/raridadeCarta.model';
import { CartasService } from '../services/cartas.service';
import { InformacaoCarta } from '../models/informacaoCarta.model';
import { InformacaoCartaService } from '../services/informacao-carta.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-carta',
  templateUrl: './cadastro-carta.component.html',
  styleUrls: ['./cadastro-carta.component.scss']
})
export class CadastroCartaComponent implements OnInit {

  raridadeCarta: Observable<RaridadeCarta[]>;
  informacaoCarta: Observable<InformacaoCarta[]>;

  formulario = this.formBuilder.group({
    raridade: ['', Validators.required],
    nome: ['', Validators.required],
    preco: ['', Validators.required],
    informacaoCarta: ['', Validators.required]

   });
 
   @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private raridadeCartaService: RaridadeCartaService,
    private informacaoCartaService: InformacaoCartaService,
    private cartasService: CartasService,
    private location: Location,
    
   ) { }

  ngOnInit(): void {
    this.raridadeCarta = this.raridadeCartaService.getObservable();
    this.informacaoCarta = this.informacaoCartaService.getObservable();
  }
  async submit() {
    if (!this.formulario.valid){
      return;
    }

    this.formulario.disable();

    const novaCarta = this.formulario.value as Carta;

    const carta = await this.cartasService.add(novaCarta);

    this.formulario.enable();

    this.formGroupDirective.resetForm();
    

  }
  voltar() {
    this.location.back();
}


}
