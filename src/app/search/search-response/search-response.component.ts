import { Component, OnInit, Input } from '@angular/core';
import { SearchResponse } from 'src/app/models/SearchResponse';

@Component({
  selector: 'app-search-response',
  templateUrl: './search-response.component.html',
  styleUrls: ['./search-response.component.css']
})
export class SearchResponseComponent implements OnInit {

  constructor() {}

  @Input()
  public searchResponse?:Array<SearchResponse> = new Array();

  @Input()
  public status:boolean;

  ngOnInit(): void {   
  }

}
