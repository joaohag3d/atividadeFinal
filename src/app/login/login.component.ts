import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

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

    erro: boolean;

    formulario = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', Validators.required],
    });

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private auth: AngularFireAuth
    ) { }

    ngOnInit(): void {
    }

    async submit() {

        this.erro = false;

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const autenticacao = this.formulario.value as Autenticacao;

        try {

            const userCredential = await this.auth.signInWithEmailAndPassword(autenticacao.email, autenticacao.senha);

            this.router.navigate(['home']);

        } catch (error) {

            this.erro = true;
            this.formulario.enable();

        }

    }

}
