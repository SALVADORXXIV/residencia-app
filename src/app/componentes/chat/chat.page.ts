import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular";
import {message} from "../../modelos/message";
import { ChatService} from "../../servicios/chat.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  public id:string;
  public id_2:string;
public name:string;
public mensajes=['Welcome, in a moment we serve you'];
public message:message;

  constructor(public modal:ModalController, public navparams:NavParams, public ChatService:ChatService) { }

  ngOnInit() {
   this.name=this.navparams.get('name');
   //this.ChatService.getChatRoom2.get(this.name);
   // this.ChatService.getChatRoom.get('this.name');
    this.id= this.navparams.get('id_2');
    this.id_2= this.navparams.get('id_p');
    console.log(this.id + this.id_2);
  }




closetmMap(){
  window.localStorage['activador']=0;
this.modal.dismiss()

}

sendMessage(){
  
 // this.mensajes.push(this.message);
 
}
}