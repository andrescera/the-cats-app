import {Injectable} from '@angular/core';
import Cat from "../models/cats";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public cats: Cat[] = [];

  constructor(private httpService: HttpService) {
  }

  public getCats(): Cat[] {
    if (!this.cats.length) {
      this.httpService.getCatsFromApi().subscribe((cats) => {
        this.cats = cats;
        console.log(this.cats)
      })
    }
    return this.cats;
  }

  public getCatByIndex(index: number): Cat {
    return this.cats[index];
  }
}
