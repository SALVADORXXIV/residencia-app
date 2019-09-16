import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db:AngularFirestore) { }
  getChatRoom2(chat){
    this.db.collection('chatsRooms').doc().set({
      name:chat  
    })
   // return this.db.collection('chatsRooms').doc(chat).valueChanges();

  }

  getChatRoom(chat:string){
    return this.db.collection('chatsRooms').doc(chat).valueChanges();

  }
}
