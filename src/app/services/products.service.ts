import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import{Products} from'../models/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL = "http://localhost:3000/products";
  constructor(private http: HttpClient){}
  
 
  all(embed: boolean = true): Observable<Products[]>{
    let requestUrl = this.API_URL;
    if(embed) requestUrl += '?_expand=category&_expand=supplier';
    return this.http.get<Products[]>(this.API_URL);
  }
  store(data: any): Observable<any>{
    return this.http.post<any>(this.API_URL, data);
  }
  findById(id: Number): Observable<Products>{
    let API_URL = `${this.API_URL}/${id}`;
    // console.log(API_URL);
    return this.http.get<Products>(API_URL);
  }
  put(obj: Products): Observable<any>{
    let API_URL = `${this.API_URL}/${obj.id}`;
    return this.http.put<any>(API_URL, obj);
  }
  delete(id: any): Observable<any>{
    // let API_URL = `${this.API_URL}/${id}`;
    return this.http.delete<any>(this.API_URL);
}
}
