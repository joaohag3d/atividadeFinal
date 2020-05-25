import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RaridadeCartaService } from '../services/raridade-carta.service';
import { RaridadeCarta } from '../models/raridadeCarta.model';
@Component({
  selector: 'app-edicao-raridade-carta',
  templateUrl: './edicao-raridade-carta.component.html',
  styleUrls: ['./edicao-raridade-carta.component.scss']
})
export class EdicaoRaridadeCartaComponent implements OnInit {

  raridadeCarta: RaridadeCarta;

  idRaridade: string;

  formulario = this.formBuilder.group({

    raridade: ['', Validators.required]
    
   });
 
   @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  constructor(
    private formBuilder: FormBuilder,
    private raridadeCartaService: RaridadeCartaService,
    private activedRoute: ActivatedRoute
    
   ) { }

    async ngOnInit() {
       this.idRaridade = this.activedRoute.snapshot.paramMap.get('id');
      this.raridadeCarta = await this.raridadeCartaService.get(this.idRaridade);

      this.formulario.patchValue(this.raridadeCarta)
  }
  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

   // const raridadeCartas = this.formulario.value as RaridadeCarta;

   // const raridadeCartaRetorno = await this.raridadeCartaService.add(raridadeCartas);

    this.formulario.enable();

    this.formGroupDirective.resetForm();
    

  }

}

