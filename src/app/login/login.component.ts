import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserInterfaces } from '../models/userInterfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  public user:UserInterfaces = {
    username:'',
    password:'',
    isLogged:false
  }

  ngOnInit():void {}

  onLogin(){   
    return this.auth.loginUser(this.user.username, this.user.password).subscribe((v:string) => {        
        this.auth.setToken(v);
        this.auth.setUser(this.user);
        this.user.isLogged = true;
        this.router.navigate(['/']);
    },
        err => {                        
            if(err.status == 200){
                this.auth.setToken(err.error.text),    //Por problema de parseo de texto plano en la rta del servicio.
                this.auth.setUser(this.user);
                this.user.isLogged = true;
                this.router.navigate(['/'])
            }            
            if(err.status == 500){
                console.log(err.message); 
            } 
        }
    );
  }
}
