
import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular";
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { DirreccionPage } from '../dirreccion/dirreccion.page';
import { MenuPage } from '../menu/menu.page';
import { ErrorPage} from '../error/error.page';
import { ModificarService } from '../../servicios/modificar.service';
import { ExtraerService } from '../../servicios/extraer.service';
import { stringify } from 'querystring';



declare var google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
 
title = 'My first AGM project';
public lat;
public lng;
public map;
public muestra;
public platform;

public directionsDisplay = new google.maps.DirectionsRenderer({polylineOptions:{strokeColor:'#2E9AFE'}});
public directionsService = new google.maps.DirectionsService();


zoom:20;
public name:string;
public address:string;
public city:string;
public colony:string;
public id:string;
public country:string;
public zipcode:string;
public state: string;
public direccion:string;
public id_2: string;
public pos:any =[];
public paquetes: any =[];
public activador:string;
public lat2:string;
public lng2:string;
public waypts: any =[];
public map2: any=[];
public hora:string;

@Input() id_ubicacion: String;
constructor(
  private navparams: NavParams, 
  public geolocation: Geolocation, 
  public modal:ModalController, 
  public _modal:ModalController,
  public _modal1:ModalController,
  public _modal2:ModalController,
  public modificarService:ModificarService,
  public extraerServicio: ExtraerService ) { 

 
}


ngOnInit() {
 
 this.id= this.navparams.get('id_2');
 this.id_2= this.navparams.get('id_p');
 


this.extraerServicio.getpack2(this.id).subscribe( direcciones => {
  this.paquetes = direcciones[0];
 
  this.direccion = this.paquetes.address + ' ' + this.paquetes.colony + ' ' + this.paquetes.city + ' ' + this.paquetes.state_address + ' ' + this.paquetes.country;

  
});

this.extraerServicio.getpack(this.id_2).subscribe( direcciones => {
  this.paquetes = direcciones[0];
this.lat2 =  this.paquetes.lat;
 this.lng2= this.paquetes.lng;
 
});

this.initdMap();
}

gca(pos, lng){
const id_2=window.localStorage['data'];
  console.log(pos + lng );
  this.modificarService.coordenas(pos, lng, id_2);
 

}

async initdMap() {
 
 

//get api uses
this.geolocation.getCurrentPosition().then((geposition: Geoposition) => {

var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
//waypoints to add
setInterval(() => {
this.waypts = [{ location: { lat: this.lat2, lng: this.lng2 }, stopover: true }];
console.log(this.lat2);
}, 15000);
//api map
this.map2 = new google.maps.Map(document.getElementById('map'), {
    zoom:17,
    center: { lat:this.lat2, lng: this.lng2  }
});

//add map
directionsDisplay.setMap(this.map2);

// set the new
//new Array(waypts[0].location.lat,waypts[0].location.lng)
setInterval(() => {
directionsService.route({
    origin: { lat: this.lat2, lng: this.lng2 },//db waypoint start
    destination: this.direccion ,//db waypoint end
    waypoints: this.waypts,
    travelMode: google.maps.TravelMode.WALKING
}, function (response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);

        var route = response.routes[0];
       var duration = 0;
     // Iteramos todos los legs de la ruta
       route.legs.forEach(function (leg) {
        // Sumamos la duracion de cada uno
       // La duración esta en segundos.
        duration += leg.duration.value;
      });
    
  // Por ejemplo: imprimimos el resultado en DOMElement con id 'duracion'
      var tiempo = duration + ' segundos';
      const segundos = parseInt(tiempo);
      var numdays = Math.floor(segundos / 86400);
      var numhours = Math.floor((segundos % 86400) / 3600);
      var numminutes = Math.floor(((segundos % 86400) % 3600) / 60);
       var numseconds = ((segundos % 86400) % 3600) % 60;
        window.localStorage['hora']= numdays + "." + numhours + "." + numminutes + "." + numseconds;

    } else {
        window.alert('Ha fallat la comunicació amb el mapa a causa de: ' + status);
    }
});
}, 15000);
/*
}, 15000);*/
});


  }

closetmMap(){
  window.localStorage['activador']=0;
this.modal.dismiss()

}

}
