import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import {AuthGuard} from "./shared/guard/param-guard.activate";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [AuthGuard],
    data: {
      authenticationRequired: false,
      authenticationFailureRedirectUrl: 'login'
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];
