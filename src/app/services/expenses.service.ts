import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expenses } from '../models/Expenses';
import { Observable } from 'rxjs';

const Api_Url = 'https://moneyme20191202065615.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  getExpenses(): Observable<Expenses[]> {
    return this.http.get<Expenses[]>(`${Api_Url}/api/Expenses`, { headers: this.getHeaders() });
  }

  createExpenses(expenses: Expenses) {
    return this.http.post(`${Api_Url}/api/Expenses`, expenses, { headers: this.getHeaders() });
  }

  getExpensesById(id) {
    return this.http.get(`${Api_Url}/api/Expenses/${id}`, { headers: this.getHeaders() });
  }

  updateExpenses(expenses: Expenses) {
    return this.http.put(`${Api_Url}/api/Expenses`, expenses, { headers: this.getHeaders() });
  }

  deleteExpenses(id: number) {
    return this.http.delete(`${Api_Url}/api/Expenses/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
