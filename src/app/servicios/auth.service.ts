import { Injectable, ɵConsole } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
//import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router: Router) {}

    login(email:string, password:string){
      
      
      return new Promise((resolve, rejected) => {
        this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        console.log(user);
         window.localStorage['usuario']= email;
        window.localStorage['entra']='entra';

         resolve(user);
        }).catch(err => rejected(err));
      });
   
    }

  logout(){
      this.AFauth.auth.signOut().then(()  => {
       this.router.navigate(['/login']);
     
      })

    }
}
