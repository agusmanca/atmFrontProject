import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { SearchResponse } from 'src/app/models/SearchResponse';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl'

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

  @Output()
  public eventStatus: EventEmitter<boolean> = new EventEmitter();
  
  public map = Mapboxgl.Map;
  
  ngOnInit(): void {

    Mapboxgl.accessToken = environment.mapboxApiKey;

      this.map = new Mapboxgl.Map({
          container: 'mapsContent', // container id
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-74.5, 40], // starting position
          zoom: 9 // starting zoom
      });
    
    this.map.addControl(new Mapboxgl.NavigationControl());  
  } 

  public cleanResult(){    
      this.searchResponse[0].address.geoLocation  
      this.status = false;
      this.eventStatus.emit(false);
  }

  public setMarker(lng:number, lat:number){
      const marker = new Mapboxgl.Marker({ draggable:true }).setLngLat([lng,lat]).addTo(this.map);
  }

  public setMapIndex(index:number): void {

        let lat = this.searchResponse[index].address.geoLocation.lat
        let lng = this.searchResponse[index].address.geoLocation.lng

        this.map = new Mapboxgl.Map({
            container: 'mapsContent', // container id
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [parseFloat(lng), parseFloat(lat)], // starting position
            zoom: 12 // starting zoom
        });    

        this.setMarker(parseFloat(lng), parseFloat(lat)); 
  }
    
}
