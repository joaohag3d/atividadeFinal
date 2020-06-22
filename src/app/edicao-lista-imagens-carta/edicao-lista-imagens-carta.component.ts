import { Component, OnInit } from '@angular/core';
import { CartasService } from '../services/cartas.service';
import { ActivatedRoute } from '@angular/router';
import { ArrayType } from '@angular/compiler';
import { Carta } from '../models/carta.model';

interface Imagem {
url: string;
arquivo: File;

}

@Component({
  selector: 'app-edicao-lista-imagens-carta',
  templateUrl: './edicao-lista-imagens-carta.component.html',
  styleUrls: ['./edicao-lista-imagens-carta.component.scss']
})
export class EdicaoListaImagensCartaComponent implements OnInit {
  carregando: boolean;
  idCarta: string;
  descricaoCarta: string;
  imagens: Imagem[] = [];

  constructor(
      private actvitedRoute: ActivatedRoute,
      private cartasService: CartasService
  ) { }

  async ngOnInit() {

      this.carregando = true;

      this.idCarta = this.actvitedRoute.snapshot.paramMap.get('id');

      const carta = await this.cartasService.get(this.idCarta);

      this.descricaoCarta = `${carta.nome} - ${carta.descricaoCarta}`;

      if (carta.imagens) {

          console.log(carta.imagens);

          this.imagens = carta.imagens.map<Imagem>(urlImagem => {
              return { url: urlImagem, arquivo: null };
          });

      }

      this.carregando = false;

  }

  adicionarImagens(event: any) {

      const arquivos = event.target.files as FileList;

      for (let index = 0; index < arquivos.length; index++) {

          const arquivo = arquivos[index];

          this.imagens.push({ url: null, arquivo: arquivo });

      }

  }

  imagemEnviada() {
      this.atualizarImagens();
  }

  excluirImagem(imagem: Imagem) {

      const indice = this.imagens.indexOf(imagem);
      this.imagens.splice(indice, 1);

      this.atualizarImagens();

  }

  async atualizarImagens() {

      const imagensCarta = this.imagens.filter(x => x.url).map(x => x.url);

      console.log(imagensCarta);

      const carta = { imagens: imagensCarta } as Carta;

      await this.cartasService.update(this.idCarta, carta);

  }



}
