import { Injectable } from '@angular/core';
import { IProducts } from './product/products';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class ProductServiceService {
private url: string = 'assets/products.json';
constructor(private _http: HttpClient) { }
getProducts(): Observable<IProducts[]>{
return this._http.get<IProducts[]>(this.url);

}
}
