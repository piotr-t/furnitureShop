import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FurnitureShopService {


  constructor(private http: HttpClient) { }

  url = 'https://api.myjson.com/bins/ot80r';


  setUserCard1 (card) {
    return this.http.put('https://api.myjson.com/bins/ot80r', card);
  }

  getUserCard1 () {
    return this.http.get('https://api.myjson.com/bins/ot80r');
  }

}
