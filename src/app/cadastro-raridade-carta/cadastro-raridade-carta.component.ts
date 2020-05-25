import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormGroupDirective } from '@angular/forms';
import { RaridadeCartaService } from '../services/raridade-carta.service';
import { RaridadeCarta } from '../models/raridadeCarta.model';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


@Component({
  selector: 'app-cadastro-raridade-carta',
  templateUrl: './cadastro-raridade-carta.component.html',
  styleUrls: ['./cadastro-raridade-carta.component.scss']
})
export class CadastroRaridadeCartaComponent implements OnInit {

   formulario = this.formBuilder.group({
    raridade: ['', Validators.required]
   });
 
   @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  
  constructor(
    private formBuilder: FormBuilder,
    private raridadeCartaService: RaridadeCartaService,
    private location: Location,
   ) { }

  ngOnInit(): void {
  }
  
  async submit() {
    if (!this.formulario.valid){
      return;
    }

    this.formulario.disable();

    const raridadeCartas = this.formulario.value as RaridadeCarta;
    

    const raridadeCartaRetorno = await this.raridadeCartaService.add(raridadeCartas);

    this.formulario.enable();

    this.formGroupDirective.resetForm();
    

  }
  voltar() {
    this.location.back();
  }

}
