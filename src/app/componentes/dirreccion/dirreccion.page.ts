import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular";
import { ExtraerService} from '../../servicios/extraer.service';

@Component({
  selector: 'app-dirreccion',
  templateUrl: './dirreccion.page.html',
  styleUrls: ['./dirreccion.page.scss'],
})
export class DirreccionPage implements OnInit {
  public name:string;
public address:string;
public city:string;
public colony:string;
public id:string;
public country:string;
public zipcode:string;
public state: string;
public direccion:string;
 public direcciones: any =[];
  
  constructor( private navparams: NavParams, public modal:ModalController, public extraerService:ExtraerService) { 
   
  }

  ngOnInit() {
    this.extraerService.getreceives(this.navparams.get('id')).subscribe( direcciones => {
      this.direcciones = direcciones;
      console.log(this.direcciones);
    });
    
   
this.name = this.navparams.get('name');
this.address = this.navparams.get('address');
this.city = this.navparams.get('city');
this.colony = this.navparams.get('colony');
this.id = this.navparams.get('id');
this.country = this.navparams.get('country');
this.zipcode = this.navparams.get('zipcode');
this.state = this.navparams.get('state');
  }

  closetmMap(){
    this.modal.dismiss()
  }
}
