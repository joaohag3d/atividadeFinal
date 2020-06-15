import { Component, OnInit } from '@angular/core';
import { CartasService } from '../services/cartas.service';
import { ActivatedRoute } from '@angular/router';
import { ArrayType } from '@angular/compiler';

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
  idArte: string;
  descricaoArte: string;
  imagens: Imagem[] = [];

  constructor(
      private actvitedRoute: ActivatedRoute,
      private artesService: ArtesService
  ) { }

  async ngOnInit() {

      this.carregando = true;

      this.idArte = this.actvitedRoute.snapshot.paramMap.get('id');

      const arte = await this.artesService.get(this.idArte);

      this.descricaoArte = `${arte.nome} - ${arte.descricao}`;

      if (arte.imagens) {

          console.log(arte.imagens);

          this.imagens = arte.imagens.map<Imagem>(urlImagem => {
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

      const imagensArte = this.imagens.filter(x => x.url).map(x => x.url);

      console.log(imagensArte);

      const arte = { imagens: imagensArte } as Arte;

      await this.artesService.update(this.idArte, arte);

  }



}
