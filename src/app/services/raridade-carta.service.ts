import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { RaridadeCarta } from '../models/raridadeCarta.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaridadeCartaService {

  constructor(private firestore: AngularFirestore) { }

   getObservable(): Observable<RaridadeCarta[]> {
   return  this.firestore.collection<RaridadeCarta>('raridadeCarta').valueChanges({ idField: 'id' });

  }
  async add(raridade: RaridadeCarta): Promise<RaridadeCarta> {

   const docRef = await this.firestore.collection<RaridadeCarta>('raridadeCarta').add(raridade);
   const doc =await docRef.get();
  

    return {
      id: doc.id,
      ...doc.data()
    } as RaridadeCarta;

  }

   async get(id: string): Promise<RaridadeCarta> {

    const doc = await this.firestore.collection<RaridadeCarta>('raridadeCarta').doc(id).get().toPromise();

    return {
      id: doc.id,
      ...doc.data()
    } as RaridadeCarta
    
  }

}
