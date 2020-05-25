import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { Carta } from '../models/carta.model';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  constructor(private firestore: AngularFirestore) { }

  async add(carta: Carta): Promise<Carta> {

    const docRef = await this.firestore.collection<Carta>('Cartas').add(carta);
    const doc =await docRef.get();
   
 
     return {
       id: doc.id,
       ...doc.data()
     } as Carta;
   }
}
