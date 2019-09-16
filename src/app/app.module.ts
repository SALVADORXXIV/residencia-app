import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { firebaseConfig } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";





//componenstes
import { MapsPage } from './componentes/maps/maps.page';
import { DirreccionPage } from './componentes/dirreccion/dirreccion.page';
import { MenuPage } from './componentes/menu/menu.page';
import {  ErrorPage } from './componentes/error/error.page';
import { ChatPage } from './componentes/chat/chat.page';
import {HomePage} from './home/home.page';



//google maps
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [AppComponent,MapsPage, DirreccionPage,MenuPage, ErrorPage,ChatPage],
  entryComponents: [MapsPage, DirreccionPage, MenuPage, ErrorPage,ChatPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule,AngularFirestoreModule, FormsModule,
   AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAH3LYnTAp8HKPb7KY2v2htVfAfsbKk3bg'
  })],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
