import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<Product>(this.jsonURL);
  }
}
