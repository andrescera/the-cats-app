import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import Cat from "../models/cats";
import {map, Observable} from "rxjs";
import BreedResponseObject from "../models/breed-response-object";



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiKey = 'bda53789-d59e-46cd-9bc4-2936630fde39';

  constructor(private http: HttpClient) {
  }

  public getCatsFromApi(): Observable<Cat[]> {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    const options = {headers: headers};
    return this.http.get<BreedResponseObject[]>('https://api.thecatapi.com/v1/breeds', options).pipe(map((catBreeds: BreedResponseObject[]) => {
      return catBreeds.map(catBreed => {
        if(!catBreed.reference_image_id){
          console.log(catBreed)
        }
        return {
          breedName: catBreed.name,
          origin: catBreed.origin,
          affectionLevel: catBreed.affection_level,
          intelligence: catBreed.intelligence,
          imageUrl:catBreed.reference_image_id ? `https://cdn2.thecatapi.com/images/${catBreed.reference_image_id}.jpg?api_key=${this.apiKey}`: undefined,
          description: catBreed.description
        }
      })
    }))

  }
}

