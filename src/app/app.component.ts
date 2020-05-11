import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projetofinal';
  constructor(private firestore: AngularFirestore) { }

  async ngOnInit() {

    const documento = await this.firestore.collection('testes')
      .doc('2F3Y7bH5pAQkobuYTebkk0')
      .get()
      .toPromise();

    console.log(documento);

  }
}
