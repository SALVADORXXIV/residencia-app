import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ModificarService {

  constructor(private db:AngularFirestore) { }

  coordenas(lat,lng, id_a){
    console.log('llegastes wey al servidor');
    this.db.collection('pack').doc(id_a).update({
      lat: lat,
      lng: lng
    })

  }
updateContacto(id, id_2){
  console.log('llegastes' + id);
  const estado='entregado';
  console.log(id)
  this.db.collection('pack').doc(id).update({
   state : estado
  })
  this.db.collection('Address').doc(id_2).update({
    state : estado
   })
 

 
}

errorpack(id, problem, description, id_a){
  console.log('llegastes wey al servidor');
  this.db.collection('pack').doc(id).update({
    problem: problem
  })
  this.db.collection('Address').doc(id_a).update({
    problem: 'error'
  })
  this.db.collection('pack').doc(id).update({
    description_problem: description
  })
  
}
}