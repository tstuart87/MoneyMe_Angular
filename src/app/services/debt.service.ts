import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Debt } from '../models/Debt';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor(private http: HttpClient) { }

  getDebts() {
    return this.http.get(`${APIURL}/api/DebtSnowball`, { headers: this.getHeaders() });
  }

  createDebt(Debt: Debt) {
return this.http.post(`${APIURL}/api/DebtSnowball`, Debt, {headers: this.getHeaders() });
  }

  getDebtById(id) {
    return this.http.get(`${APIURL}/api/DebtSnowball/${id}`, {headers: this.getHeaders() });
  }

  updateDebt(Debt: Debt) {
    return this.http.put(`${APIURL}/api/DebtSnowball`, Debt, {headers: this.getHeaders() });
  }

  deleteDebt(id: number) {
    return this.http.delete(`${APIURL}/api/DebtSnowball/${id}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set(`Authorization`, `Bearer ${localStorage.getItem('id_token')}`);
  }
}
