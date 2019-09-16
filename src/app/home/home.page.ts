import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ExtraerService, delivery} from '../servicios/extraer.service';
import { ChatService  } from '../servicios/chat.service';
import { ModalController} from '@ionic/angular';
import { MapsPage } from '../componentes/maps/maps.page';
import { identifierModuleUrl } from '@angular/compiler';
import { MenuPage } from '../componentes/menu/menu.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
 usuario = window.localStorage['usuario']
  entregas = [
  {id:1, empresa:'notas 1', direccion: 'como estas chavo 1'},
  {id:2, empresa:'notas 1', direccion: 'como estas chavo 2'},
  {id:3, empresa:'notas 1', direccion: 'como estas chavo 3'}
  ];

  public prueba;
  public direcciones: any =[];
  
  constructor( public authservice:AuthService,public extraerService:ExtraerService, public modal:ModalController ) { }

  Onlogout(){
    this.authservice.logout();
  }


    
  ngOnInit(){
    this.extraerService.getUsuario().subscribe();
    this.extraerService.getdelivery().subscribe( direcciones => {
      this.direcciones = direcciones;
      console.log(this.direcciones);
    });
 
  }

  openmap(direccion){


    if(window.localStorage['modal2']=='activar'){
     
      
          window.localStorage['modal']='no_activado';
        
       
          
        console.log('entraste wey' +  window.localStorage['modal']);
    
    }
    window.localStorage['activador']=5000;
  this.modal.create({
    component: MenuPage,
    componentProps : {
      id_2:direccion.id,
     id: direccion.id_p,
     id_u:direccion.id_u
    

    }
  }).then((modal) => modal.present())
  }

    }