import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroRaridadeCartaComponent } from './cadastro-raridade-carta/cadastro-raridade-carta.component';
import { CadastroCartaComponent } from './cadastro-carta/cadastro-carta.component';
import { EdicaoRaridadeCartaComponent } from './edicao-raridade-carta/edicao-raridade-carta.component';
import { EdicaoListaImagensCartaComponent } from './edicao-lista-imagens-carta/edicao-lista-imagens-carta.component';
import { CadastroInformacaoCartaComponent } from './cadastro-informacao-carta/cadastro-informacao-carta.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  
  { path: 'raridadeCarta/cadastro', component: CadastroRaridadeCartaComponent},
  { path: 'raridadeCarta/:id/edicao', component: EdicaoRaridadeCartaComponent},

  { path: 'carta/cadastro', component: CadastroCartaComponent},
  { path: 'carta/:id/edicao/imagens', component: EdicaoListaImagensCartaComponent},
  { path: 'informacaoCarta/cadastro', component: CadastroInformacaoCartaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
