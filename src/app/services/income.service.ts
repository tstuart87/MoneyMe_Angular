import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Income } from '../models/Income';

const Api_Url = 'https://moneyme20191202065615.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http: HttpClient) { }

  getIncomes() {
    return this.http.get(`${Api_Url}/api/Income`, { headers: this.getHeaders() });
  }

  getIncomeById(id) {
    return this.http.get(`${Api_Url}/api/Income/${id}`, { headers: this.getHeaders() });
  }

  createIncome(income: Income) {
  return this.http.post(`${Api_Url}/api/Income`, income, {headers: this.getHeaders() });
  }

  updateIncome(income: Income) {
    return this.http.put(`${Api_Url}/api/Income`, income, {headers: this.getHeaders() });
  }

  deleteIncome(id: number) {
    return this.http.delete(`${Api_Url}/api/Income/${id}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set(`Authorization`, `Bearer ${localStorage.getItem('id_token')}`);
  }
}