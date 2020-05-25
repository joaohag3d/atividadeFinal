import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, FormBuilder, Validators } from '@angular/forms';
import { RaridadeCartaService } from '../services/raridade-carta.service';
import { Carta } from '../models/carta.model';
import { Observable } from 'rxjs';
import { RaridadeCarta } from '../models/raridadeCarta.model';

@Component({
  selector: 'app-cadastro-carta',
  templateUrl: './cadastro-carta.component.html',
  styleUrls: ['./cadastro-carta.component.scss']
})
export class CadastroCartaComponent implements OnInit {

  raridadeCarta: Observable<RaridadeCarta[]>;

  formulario = this.formBuilder.group({
    idRaridade: ['', Validators.required],
    nome: ['', Validators.required],
    preco: ['', Validators.required],
    informacaoCarta: ['', Validators.required]

   });
 
   @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private raridadeCartaService: RaridadeCartaService,
    
    
   ) { }

  ngOnInit(): void {
    this.raridadeCarta = this.raridadeCartaService.getObservable();
  }
  async submit() {
    if (!this.formulario.valid){
      return;
    }

    this.formulario.disable();

    const novaCarta = this.formulario.value as Carta;

    const raridadeCartaRetorno = await this.raridadeCartaService.add(novaCarta);

    this.formulario.enable();

    this.formGroupDirective.resetForm();
    

  }

}
