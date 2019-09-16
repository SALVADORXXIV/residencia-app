import { Injectable, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from "rxjs/operators";

export interface user {
  id_uu: string,
  id: string
}

export interface delivery {
  id: string,
  id_address: string,
  id_pack: string
}

export interface address {
  name: string,
  id: string,
  descripcion: string,
  state: string,
  country: string,
  id_a: string,
  problem:string

}

export interface receives {
  id: string,
  id_address: string,
  name: string,
  last_name: string,
  mobile: string,
  telephones: string
}

export interface pack {
  id:string;
  weight:string,
  caution:string,
  descripcion:string,
  dimensions:string,
  name:string,
}

@Injectable({
  providedIn: 'root'
})
export class ExtraerService {
 


  constructor(private db:AngularFirestore) { }
  public muestra: string;
  getUsuario();

    getUsuario(){
      const user2=window.localStorage['usuario'];
      return this.db.collection('user_client', ref => ref.where('email', '==', user2 )).snapshotChanges().pipe(map(usuario => { 
        usuario.map(a =>{ const data = a.payload.doc.data() as user;
          window.localStorage['id']=data.id_uu;
          console.log(window.localStorage['id']);
          this.getdelivery();
        
      
        }) }))
         }

         getdelivery(){
          const user =window.localStorage['id'];
        return this.db.collection('pack', ref =>ref.where('id_uu', '==', user)).snapshotChanges().pipe(map(rooms => {
          
          return  rooms.map(a => {
              const data = a.payload.doc.data() as address;
              data.id = a.payload.doc.id;
              return data;
            })
          }))
         
        }

        getreceives(id_address){
          //console.log('si entrastes wey' + id_address);
          return this.db.collection('user', ref => ref.where('id_u', '==', id_address)).snapshotChanges().pipe(map(rooms => {
            return rooms.map(a => {
              const data = a.payload.doc.data() as receives;
              data.id = a.payload.doc.id;
              return data;
            })
          }))

        }

        getpack(id_address){
          //console.log('si entrastes wey' + id_address);
          return this.db.collection('pack', ref => ref.where('id_p', '==', id_address)).snapshotChanges().pipe(map(rooms => {
            return rooms.map(a => {
              const data = a.payload.doc.data() as pack;
              data.id = a.payload.doc.id;
              return data;
            })
          }))
        }
          getpack2(id_address){
            //console.log('si entrastes wey' + id_address);
            return this.db.collection('Address', ref => ref.where('id_a', '==', id_address)).snapshotChanges().pipe(map(rooms => {
              return rooms.map(a => {
                const data = a.payload.doc.data() as address;
                data.id = a.payload.doc.id;
                window.localStorage['data']=data.id;
                return data;
              })
            }))

        }
       
    
         }

