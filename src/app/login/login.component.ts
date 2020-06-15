
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

class Autenticacao {
    email: string;
    senha: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formulario = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', Validators.required],
    });

    constructor(
        private formBuilder: FormBuilder,
        private auth: AngularFireAuth
    ) { }

    ngOnInit(): void {
    }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const autenticacao = this.formulario.value as Autenticacao;

        const userCredential = await this.auth.signInWithEmailAndPassword(autenticacao.email, autenticacao.senha);

        if (userCredential.user) {

          console.log('Autenticado');

        } else {

          console.log('falhou')
          console.log(userCredential);
        }
        
        console.log(userCredential);

    }

}
