import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Debt } from '../models/Debt';

const Api_Url = 'https://moneyme20191202065615.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor(private http: HttpClient) { }

  getDebts() {
    return this.http.get(`${Api_Url}api/DebtSnowball`, { headers: this.getHeaders() });
  }

  createDebt(Debt: Debt) {
return this.http.post(`${Api_Url}api/DebtSnowball`, Debt, {headers: this.getHeaders() });
  }

  getDebtById(id) {
    return this.http.get(`${Api_Url}api/DebtSnowball/${id}`, {headers: this.getHeaders() });
  }

  updateDebt(Debt: Debt) {
    return this.http.put(`${Api_Url}api/DebtSnowball`, Debt, {headers: this.getHeaders() });
  }

  deleteDebt(id: number) {
    return this.http.delete(`${Api_Url}api/DebtSnowball/${id}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set(`Authorization`, `Bearer ${localStorage.getItem('id_token')}`);
  }
}
