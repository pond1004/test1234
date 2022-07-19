import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GoodServiceService {
  //private url: string = 'https://jsonplaceholder.typicode.com/users';  // Where is data
  private url: string = 'http://localhost:3000/customers';  // Where is data

  constructor(public httpClient: HttpClient) { }   // Injection

  getAllDatafromBackend() {
    return this.httpClient.get<{
      id: number;
      email: string;
      name: string;
	    active: number;
    }>(this.url)
  }
}
