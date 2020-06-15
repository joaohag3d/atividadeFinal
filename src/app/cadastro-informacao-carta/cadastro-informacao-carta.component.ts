import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { InformacaoCartaService } from '../services/informacao-carta.service';
import { InformacaoCarta } from '../models/informacaoCarta.model';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-cadastro-informacao-carta',
  templateUrl: './cadastro-informacao-carta.component.html',
  styleUrls: ['./cadastro-informacao-carta.component.scss']
})
export class CadastroInformacaoCartaComponent implements OnInit {

  formulario = this.formBuilder.group({
    
    atributo: ['', Validators.required],
    tipo: ['', Validators.required],
    arquetipo: ['', Validators.required],
    efeito: ['', Validators.required],

   });
 
   @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  
  constructor(
    private formBuilder: FormBuilder,
    private informacaoCartaService: InformacaoCartaService,
    private location: Location,
   ) { }

  ngOnInit(): void {
  }
  
  async submit() {
    if (!this.formulario.valid){
      return;
    }

    this.formulario.disable();

    const informacaoCartas = this.formulario.value as InformacaoCarta;
    

    const informacaoCartaRetorno = await this.informacaoCartaService.add(informacaoCartas);

    this.formulario.enable();

    this.formGroupDirective.resetForm();
    

  }
  voltar() {
    this.location.back();
  }

}


 


