import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Carta } from '../models/carta.model';
import { Observable } from 'rxjs';
import { RaridadeCarta } from '../models/raridadeCarta.model';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Carta[]> {
    return this.firestore.collection<Carta>('Cartas').valueChanges({ idField: 'id' });
  }

  private convertToCarta(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Carta {

    const dados = document.data();

    const carta = {
        id: document.id,
        ...dados
    } as Carta;

    if (dados.dataEdicao) {
        carta.dataEdicao = dados.dataEdicao.toDate();
    }

    if (dados.dataCadastro) {
        carta.dataCadastro = dados.dataCadastro.toDate();
    }

    return carta;

}
  
  async add(raridade: Carta): Promise<Carta> {

    const documentRef = await this.firestore.collection<Carta>('Cartas').add(raridade);
    const document = await documentRef.get();

    return this.convertToCarta(document);

}

async get(id: string): Promise<Carta> {

  const document = await this.firestore.collection<Carta>('Cartas').doc(id).get().toPromise();

  return this.convertToCarta(document);

}

 
   async update(id: string, carta: Carta): Promise<void> {

    await this.firestore.collection<Carta>('Cartas').doc(id).update(carta);


}
}