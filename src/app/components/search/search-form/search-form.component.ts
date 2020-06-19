import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormSearch } from 'src/app/models/FormSearch';
import { SearchAtmService } from 'src/app/services/search-atm.service';
import { SearchResponse } from 'src/app/models/SearchResponse';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {


    public status: boolean = false;
    public searchForm: FormGroup;
    private searchResponse:Array<SearchResponse> = new Array(); 
        
    constructor(private _builder:FormBuilder, 
                private auth:AuthService, 
                private searchService:SearchAtmService)
    { 
        this.searchForm = _builder.group({        
            topic:[''],
            street:[false],    
            houseNum:[false],
            postalCode:[false],
            city:[false],
            lat:[false],
            long:[false],
            dist:[false],
            type:[false]
        });
    }

    ngOnInit(): void { }

    public searchAtm(value:FormSearch) {        

        this.searchService.searchAtm(value, this.auth.getToken()).subscribe((data:Array<SearchResponse>) => {                
                this.searchResponse = data;
                if(this.searchResponse.length > 0){
                    this.status = true;        
                }
            },
            err => {
                console.log(err);
                this.status = false;
            }
        );        
    }

    public getResponse(): Array<SearchResponse> {
        return this.searchResponse;
    }     

    public cleanResult(event:boolean):void{
        this.status = event;
        this.searchResponse = undefined;
    }
}
