import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchResponse } from '../models/SearchResponse';
import { FormSearch } from '../models/FormSearch';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchAtmService {

  constructor(private http: HttpClient) { }

  private apiSearch:string = "http://vps-1575977-x.dattaweb.com:8080/atscom/atm";
  private searchTopic:string = "";
  private searchParams:string = "";

  private headers: HttpHeaders

  public searchAtm(form:FormSearch, token:string):Observable<any>{

    this.searchTopic = "?q=" + form.topic;
    this.searchParams = this.setSeatchParam(form);
     
    this.headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    );

    let urlFinal = this.apiSearch + this.searchTopic + this.searchParams;
        
    return this.http.get<any>(urlFinal, {headers: this.headers});
  }

  private setSeatchParam(form:FormSearch):string{

    let paramResult:string = "&fields=";    
    let ctrlFlag:boolean = false; 

    let listValue: Array<boolean> = [
      form.street, 
      form.houseNum,
      form.postalCode,
      form.city,
      form.lat,
      form.long,
      form.dist,
      form.type
    ];

    let listParams: Array<string> = [
      "street","housenumber","postalcode","city",
      "lat", "lng", "distance", "type" 
    ]; 

    listValue.forEach((value, i) => {
        if(value){
            if(ctrlFlag){
              paramResult += "," + listParams[i];
            }else{
              paramResult += listParams[i];
              ctrlFlag = true;
            }
        }
    });   

    return paramResult;
  }
}
