import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  

  constructor(private ht:HttpClient) {
  }


  getdata(){
    return this.ht.get("https://hn.algolia.com/api/v1/search_by_date?tags=story")
  }
  postDataToJson(json)
        {
          return this.ht.post("http://localhost:3000/details",json)
        }
}
