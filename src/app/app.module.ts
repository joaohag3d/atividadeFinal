import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

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
import { ValidatorsComponent } from './validators/validators.component';
import { EdicaoCartaComponent } from './edicao-carta/edicao-carta.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
 import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { CartasComponent } from './cartas/cartas.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


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
    CadastroUsuarioComponent,
    ValidatorsComponent,
    EdicaoCartaComponent,
    CartasComponent,
    CarrinhoComponent 
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
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule,
    MatListModule,
    MatCheckboxModule,
    MatDividerModule,

    
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
