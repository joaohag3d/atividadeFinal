import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Carta } from '../models/carta.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Carta[]> {
    return this.firestore.collection<Carta>('Cartas').valueChanges({ idField: 'id' });
  }
  async add(carta: Carta): Promise<Carta> {

    const docRef = await this.firestore.collection<Carta>('Cartas').add(carta);
    const doc =await docRef.get();
   
 
     return {
       id: doc.id,
       ...doc.data()
     } as Carta;
   }

   async update(id: string, carta: Carta): Promise<void> {

    await this.firestore.collection<Carta>('Cartas').doc(id).update(carta);


}
}