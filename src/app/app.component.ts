import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Carta } from './models/carta.model';
import { InformacaoCarta } from './models/informacaoCarta.model';
import { RaridadeCarta } from './models/raridadeCarta.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projetofinal';
  constructor(private firestore: AngularFirestore) { }

  async ngOnInit() {

    const documentoCarta = await this.firestore.collection('Cartas')
      .doc('DOExx7mOrGEkKlKABtus')
      .get()
      .toPromise();

      const carta = {

        id: documentoCarta.id,
        ...documentoCarta.data()

      } as Carta;
      console.log(carta);

      const documentoInformacaoCarta = await this.firestore.collection('informacaoCarta')
      .doc('carta.informacaoCarta')
      .get()
      .toPromise();

      const informacaoCarta = {
        id: documentoInformacaoCarta.id,
        ...documentoInformacaoCarta.data()
      } as InformacaoCarta 

      const documentoRaridadeCarta = await this.firestore.collection('raridadeCarta')
      .doc('carta.raridadeCarta')
      .get()
      .toPromise();

      const raridadeCarta = {
        id: documentoRaridadeCarta.id,
        ...documentoRaridadeCarta.data()
      } as RaridadeCarta
    }
  


  }

