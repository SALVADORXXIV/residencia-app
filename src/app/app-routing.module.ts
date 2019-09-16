import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate : [AuthGuard] },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate : [NologinGuard]},
  { path: 'chat', loadChildren: './componentes/chat/chat.module#ChatPageModule', canActivate : [NologinGuard] },
  { path: 'maps', loadChildren: './componentes/maps/maps.module#MapsPageModule', canActivate : [NologinGuard] },
  { path: 'error', loadChildren: './componentes/error/error.module#ErrorPageModule', canActivate : [NologinGuard] },
  { path: 'dirreccion', loadChildren: './componentes/dirreccion/dirreccion.module#DirreccionPageModule', canActivate : [NologinGuard] },
  { path: 'menu', loadChildren: './componentes/menu/menu.module#MenuPageModule', canActivate : [NologinGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
