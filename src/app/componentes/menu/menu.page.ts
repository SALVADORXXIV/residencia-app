import { Component, OnInit, ɵConsole } from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular";
import { ExtraerService, delivery} from '../../servicios/extraer.service';
import {ModificarService } from '../../servicios/modificar.service';
import { MapsPage } from '../maps/maps.page';
import {ChatPage} from '../chat/chat.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public id:string;
  public id_2:string;
  public direcciones: any =[];
  public paquetes: any =[];
  public name:string;
  public name2:any=[];
  constructor(private navparams: NavParams, public modal:ModalController,public modal2:ModalController, public modal1:ModalController, public extraerService:ExtraerService, public modificarService:ModificarService) { }

  ngOnInit() {

  
    this.extraerService.getreceives(this.navparams.get('id_u')).subscribe( direcciones => {
      this.direcciones = direcciones;
      this.name2 = direcciones[0];
      this.name=this.name2.name;
      console.log(this.name);
    });

    this.extraerService.getpack(this.navparams.get('id')).subscribe( direcciones => {
      this.paquetes = direcciones;
      console.log(this.paquetes);
    });
    
  
    this.id = this.navparams.get('id');
    this.id_2 = this.navparams.get('id_2');
  

  }

  updateContacto(id){
    alert("Confirm that the package has been delivered");
this.modificarService.updateContacto(id, this.id_2);
window.localStorage['modal']='activado';
window.localStorage['modal2']='no activado';
this.modal.dismiss();
  }

  ubicacion(id, state,id_p){
  
console.log('mensaje de prueba'+id);
    if(state=='en_camino'){
      console.log('mensaje de prueba'+id_p);
    
      this.modal1.create({
        component: MapsPage,
        componentProps : {
          id_2:id,
          id_p:id_p
    
        }
      }).then((modal) => modal.present())
      
    
    }
    else{
      if(state=='ruta'){
        alert('Su paquete esta en espera, gracias por la espera');
      }
      else{
        if(state=='Almacen'){
          alert('Su paquete todavia esta en almacen');
        }
        else{
          alert('Su paquete ya fue entregado');
        }
      }
    }

  }
 
  entrega(id_a, id_p){

    this.modal2.create({
      component: ChatPage,
      componentProps : {
        id_2:id_a,
        id_p:id_p,
        name:this.name
  
      }
    }).then((modal) => modal.present())
  }
  closetmMap(){
 
    this.modal.dismiss();
    }
}
