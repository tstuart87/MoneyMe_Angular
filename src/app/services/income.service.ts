import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Income } from '../models/Income';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http: HttpClient) { }

  getIncomes() {
    return this.http.get(`${APIURL}/api/Income`, { headers: this.getHeaders() });
  }

  getIncomeById(id) {
    return this.http.get(`${APIURL}/api/Income/${id}`, { headers: this.getHeaders() });
  }

  createIncome(income: Income) {
return this.http.post(`${APIURL}/api/Income`, income, {headers: this.getHeaders() });

  }

  updateIncome(income: Income) {
    return this.http.put(`${APIURL}/api/Income`, income, {headers: this.getHeaders() });
  }

  deleteIncome(id: number) {
    return this.http.delete(`${APIURL}/api/Income/${id}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set(`Authorization`, `Bearer ${localStorage.getItem('id_token')}`);
  }
}