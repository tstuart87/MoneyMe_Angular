import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expenses } from '../models/Expenses';
import { Observable } from 'rxjs';
import { APIURL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  getExpenses(): Observable<Expenses[]> {
    return this.http.get<Expenses[]>(`${APIURL}/api/Expenses`, { headers: this.getHeaders() });
  }

  createExpenses(expenses: Expenses) {
    return this.http.post(`${APIURL}/api/Expenses`, expenses, { headers: this.getHeaders() });
  }

  getExpensesById(id) {
    return this.http.get(`${APIURL}/api/Expenses/${id}`, { headers: this.getHeaders() });
  }

  updateExpenses(expenses: Expenses) {
    return this.http.put(`${APIURL}/api/Expenses`, expenses, { headers: this.getHeaders() });
  }

  deleteExpenses(id: number) {
    return this.http.delete(`${APIURL}/api/Expenses/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
