import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular";
import { ExtraerService, delivery} from '../../servicios/extraer.service';
import {ModificarService } from '../../servicios/modificar.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {
  public id:string;
  public direcciones: any =[];
  public paquetes: any =[];
  public error = 'none of the above';
public descripcion:string;
  constructor(public modal:ModalController, public navparams:NavParams, public extraerService:ExtraerService, public modificarService :ModificarService, public router:Router ) { }

  ngOnInit() {
    this.extraerService.getreceives(this.navparams.get('id')).subscribe( direcciones => {
      this.direcciones = direcciones;
      console.log(this.direcciones);
    });

    this.extraerService.getpack(this.navparams.get('id')).subscribe( direcciones => {
      this.paquetes = direcciones;
      console.log(this.paquetes);
    });
    
    this.id = this.navparams.get('id');
  }

  subirerror(id){
    const id_a =window.localStorage['id_address'];
    if(this.descripcion){
      alert("saved data");
      this.modificarService.errorpack(id,this.error,this.descripcion, id_a);
      console.log('este es el id' + id);
      console.log('mensaje de prueba' + this.error);
      console.log('mensaje de prueba' + this.descripcion);
      this.modal.dismiss();
      
    }
   else{
     alert('You have not described the problem');
   }
  
  }
  closetmMap(){
    this.modal.dismiss()
    }
}
