import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth.service";
import { Router } from "@angular/router";
import {NavParams, ModalController, NavController} from "@ionic/angular";



import { HomePage } from '../../home/home.page';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService:AuthService, public router: Router, public navCtrl:NavController, public modal:ModalController) { }

  ngOnInit() {
  }

  onSubmitLogin()
  {
    
this.authService.login(this.email, this.password);
var entra=window.localStorage['entra'];
if(entra='entra'){
 // console.log('entrastes wey');
 this.router.navigate(['/home']);
 
  this.navCtrl.navigateRoot('/home');
  //console.log('entrastes wey');
  this.modal.create({
    component: HomePage,
    componentProps : {
     

    }
  }).then((modal) => modal.present())
  }


 //this.router.navigate(['/home']);
  }

}