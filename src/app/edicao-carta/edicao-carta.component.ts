import { Component, OnInit } from '@angular/core';
import { Carta } from '../models/carta.model';
import { FormBuilder, Validators } from '@angular/forms';
import { RaridadeCartaService } from '../services/raridade-carta.service';
import { InformacaoCartaService } from '../services/informacao-carta.service';
import { CartasService } from '../services/cartas.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { InformacaoCarta } from '../models/informacaoCarta.model';
import { RaridadeCarta } from '../models/raridadeCarta.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edicao-carta',
  templateUrl: './edicao-carta.component.html',
  styleUrls: ['./edicao-carta.component.scss']
})
export class EdicaoCartaComponent implements OnInit {

  idCarta: string;
  carta: Carta;

  raridadeCarta: Observable<RaridadeCarta[]>;
  informacaoCarta: Observable<InformacaoCarta[]>;

  formulario = this.formBuilder.group({
    raridade: ['', Validators.required],
    nome: ['', Validators.required],
    preco: ['', Validators.required],
    informacaoCarta: ['', Validators.required]

   });
 


  constructor(
    private formBuilder: FormBuilder,
    private raridadeCartaService: RaridadeCartaService,
    private informacaoCartaService: InformacaoCartaService,
    private cartasService: CartasService,
    private location: Location,
    private activedRoute: ActivatedRoute,
    // private snackBar: MatSnackBar,
    
   ) { }

   async ngOnInit() {
     this.formulario.disable();

    this.raridadeCarta = this.raridadeCartaService.getObservable();
    this.informacaoCarta = this.informacaoCartaService.getObservable();

    
    this.idCarta = this.activedRoute.snapshot.paramMap.get('id');
    this.carta = await this.cartasService.get(this.idCarta);

    console.log(this.carta);

    this.formulario.patchValue(this.carta);

    this.formulario.enable();
  }
  async submit() {

    if (!this.formulario.valid){
      return;
    }

    this.formulario.disable();

    const cartaEditada = this.formulario.value as Carta;
    cartaEditada.dataEdicao = new Date();

    const carta = await this.cartasService.update(this.idCarta, cartaEditada);

    console.log('Uma Carta foi editada -------------------------');
        console.log('Carta:');
        console.log(this.carta);
        console.log('Campos atualizados:');
        console.log(cartaEditada);

        Object.assign(this.carta, cartaEditada);

        this.formulario.enable();

      //  this.snackBar.open('Arte atualizada com sucesso!');
  //  this.snackBar.open('Nova arte cadastrada com sucesso!');
    

  }
  voltar() {
    this.location.back();
}


}
