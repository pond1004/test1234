import { Injectable } from '@angular/core';
import { IProduct } from './pd/pd';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdServiceService {
  private url: string = 'assets/pd.json';constructor(private _http: HttpClient) { }
  getProducts(): Observable<IProduct[]>{
  return this._http.get<IProduct[]>(this.url);
  }
  }
