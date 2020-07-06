import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { Carta } from '../models/carta.model';
import { RaridadeCarta } from '../models/raridadeCarta.model';
import { InformacaoCarta } from '../models/informacaoCarta.model';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { RaridadeCartaService } from '../services/raridade-carta.service';
import { InformacaoCartaService } from '../services/informacao-carta.service';
import { CartasService } from '../services/cartas.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss']
})
export class CartasComponent implements OnInit {

  raridadeCarta: Observable<RaridadeCarta[]>;
  informacaoCarta: Observable<InformacaoCarta[]>;

  cartas: Observable<Carta[]>;
  usuario: Usuario;

  constructor(
    private router: Router,
    private usuariosService: UsuariosService,
    private raridadeCartaService: RaridadeCartaService,
    private informacaoCartaService: InformacaoCartaService,
    private cartaService: CartasService
    ) { }

    async ngOnInit(): Promise<void> {

      this.usuario = await this.usuariosService.getUsuarioLogado();
      this.raridadeCarta = this.raridadeCartaService.getObservable();
      this.informacaoCarta = this.informacaoCartaService.getObservable();
      this.cartas = this.cartaService.getObservable();
  }

  usuarioAdmin(): boolean {

      if (this.usuario && this.usuario.permissao === 'admin') {
          return true;
      } else {
          return false;
      }
  }

  editarRaridade(raridadeCarta: RaridadeCarta) {
      this.router.navigate([`/home/raridadeCarta/${raridadeCarta.id}/edicao`]);
  }

}




 