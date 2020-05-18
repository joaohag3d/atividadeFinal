import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { RaridadeCarta } from '../models/raridadeCarta.model';

@Injectable({
  providedIn: 'root'
})
export class RaridadeCartaService {

  constructor(private firestore: AngularFirestore) { }

  async add(raridade: RaridadeCarta): Promise<RaridadeCarta> {

   const docRef = await this.firestore.collection<RaridadeCarta>('RaridadeCarta').add(raridade);
   const doc =await docRef.get();
  

    return {
      id: doc.id,
      ...doc.data()
    } as RaridadeCarta;
  }
}
