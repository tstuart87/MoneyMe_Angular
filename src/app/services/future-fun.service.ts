import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FutureFun } from '../models/FutureFun';
import { Observable } from 'rxjs';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FutureFunService {

  constructor(private http: HttpClient) { }

  getFutureFun(): Observable<FutureFun[]> {
    return this.http.get<FutureFun[]>(`${APIURL}/api/futureFun`, { headers: this.getHeaders() });
  }

  createFutureFun(futureFun: FutureFun) {
    return this.http.post(`${APIURL}/api/futureFun`, futureFun, { headers: this.getHeaders() });
  }

  getFutureFunById(id) {
    return this.http.get(`${APIURL}/api/futureFun/${id}`, { headers: this.getHeaders() });
  }

  updateFutureFun(futureFun: FutureFun) {
    return this.http.put(`${APIURL}/api/futureFun`, futureFun, { headers: this.getHeaders() });
  }

  deleteFutureFun(id: number) {
    return this.http.delete(`${APIURL}/api/FutureFun/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
