import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroRaridadeCartaComponent } from './cadastro-raridade-carta/cadastro-raridade-carta.component';
import { CadastroCartaComponent } from './cadastro-carta/cadastro-carta.component';
import { EdicaoRaridadeCartaComponent } from './edicao-raridade-carta/edicao-raridade-carta.component';


const routes: Routes = [
  { path: 'raridadeCarta/cadastro', component: CadastroRaridadeCartaComponent},
  { path: 'raridadeCarta/:id/edicao', component: EdicaoRaridadeCartaComponent},
  { path: 'carta/cadastro', component: CadastroCartaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
