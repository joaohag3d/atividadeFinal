import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { EdicaoRaridadeCartaComponent } from './edicao-raridade-carta/edicao-raridade-carta.component';
import { CadastroRaridadeCartaComponent } from './cadastro-raridade-carta/cadastro-raridade-carta.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { CadastroCartaComponent } from './cadastro-carta/cadastro-carta.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { EdicaoListaImagensCartaComponent } from './edicao-lista-imagens-carta/edicao-lista-imagens-carta.component';
import { EdicaoImagemCartaComponent } from './edicao-imagem-carta/edicao-imagem-carta.component';
import { CadastroInformacaoCartaComponent } from './cadastro-informacao-carta/cadastro-informacao-carta.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


@NgModule({

  declarations: [
    AppComponent,
    EdicaoRaridadeCartaComponent,
    CadastroRaridadeCartaComponent,
    CadastroCartaComponent,
    EdicaoListaImagensCartaComponent,
    EdicaoImagemCartaComponent,
    CadastroInformacaoCartaComponent,
    LoginComponent,
    HomeComponent,
    CadastroUsuarioComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
