import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { InformacaoCarta } from '../models/informacaoCarta.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformacaoCartaService {

  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<InformacaoCarta[]> {
    return  this.firestore.collection<InformacaoCarta>('informacaoCarta').valueChanges({ idField: 'id' });
}

  async add(informacao: InformacaoCarta): Promise<InformacaoCarta> {

    const docRef = await this.firestore.collection<InformacaoCarta>('informacaoCarta').add(informacao);
    const doc =await docRef.get();
   
 
     return {
       id: doc.id,
       ...doc.data()
     } as InformacaoCarta;

    }

    async update(id: string, informacaoCarta: InformacaoCarta): Promise<void> {

      await this.firestore.collection<InformacaoCarta>('informacaoCarta').doc(id).update(informacaoCarta);
  
  }
  
  
  }
  

