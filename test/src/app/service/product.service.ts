import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  PORT = `http://localhost:3000/products`;
  constructor (private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get(this.PORT)
  }
  get(id: number): Observable<any> {
    return this.httpClient.get(`${this.PORT}/${Number(id)}`)
  }
  remove(id: number): Observable<any> {
    return this.httpClient.delete(`${this.PORT}/${(id)}`)
  }
  update(data: any): Observable<any> {
    return this.httpClient.put(`${this.PORT}/${Number(data.id)}`, data)
  }
  add(data: any): Observable<any> {
    return this.httpClient.post(this.PORT, data)
  }
}
