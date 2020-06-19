export interface SearchResponse{
    id:string,
    creationDate:string,
    address: {
        id:string,
        creationDate:string,
        street:string,
        housenumber:string
        postalcode:string
        city:string, 
        geoLocation: {
            id: string,
            creationDate: string,
            lat: string,
            lng: string
        }
    },
    distance:number,
    type:string
}