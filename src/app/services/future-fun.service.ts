import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FutureFun } from '../models/FutureFun';
import { Observable } from 'rxjs';

const Api_Url = 'https://localhost:44325'

@Injectable({
  providedIn: 'root'
})
export class FutureFunService {

  constructor(private http: HttpClient) { }

  getFutureFun(): Observable<FutureFun[]> {
    return this.http.get<FutureFun[]>(`${Api_Url}/api/FutureFun`, { headers: this.getHeaders() });
  }

  createFutureFun(futureFun: FutureFun) {
    return this.http.post(`${Api_Url}/api/FutureFun`, futureFun, { headers: this.getHeaders() });
  }

  getFutureFunById(id) {
    return this.http.get(`${Api_Url}/api/FutureFun/${id}`, { headers: this.getHeaders() });
  }

  updateFutureFun(futureFun: FutureFun) {
    return this.http.put(`${Api_Url}/api/FutureFun`, futureFun, { headers: this.getHeaders() });
  }

  deleteFutureFun(id: number) {
    return this.http.delete(`${Api_Url}/api/FutureFun/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
