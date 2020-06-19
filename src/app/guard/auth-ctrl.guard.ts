import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthCtrlGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router){
  }

  canActivate(){
      if(this.auth.isLogged()){
          return true;
      } else {
        this.router.navigate(['login']);
        return false;
      } 
  }  
}
