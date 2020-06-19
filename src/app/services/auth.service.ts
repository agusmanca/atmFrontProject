import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators'
import { isNullOrUndefined } from 'util';
import { UserInterfaces } from '../models/userInterfaces'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  private user:UserInterfaces;
  private headers = new HttpHeaders({'Accept': 'text/plain', 'Content-Type': 'text/plain'});
  
  loginUser(userParam:string, pswParam: string):Observable<any>{
    
    return this.http.post<any>('http://vps-1575977-x.dattaweb.com:8080/atscom/login', 
        {username: userParam, password: pswParam}, 
        {headers: this.headers}
    ).pipe(map(data => data));
  }

  public isLogged():boolean{
      if(!isNullOrUndefined(this.getToken())){
        console.log(this.getToken() + " Entro");
        return true;
      } 

      return false;
  }

  public setToken(token:string):void{    
    localStorage.setItem('accessToken', token);
  }

  public getToken():string{
    return localStorage.getItem('accessToken');
  }

  public logout():void{
     localStorage.removeItem('accessToken');
     localStorage.removeItem('currentUser');
  }

  public setUser(userParam:UserInterfaces):void{
      this.user = userParam;
      localStorage.setItem('currentUser', JSON.stringify(this.user));
  }

  public getUser():UserInterfaces{
    return this.user;
  }
}
