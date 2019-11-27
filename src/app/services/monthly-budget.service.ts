import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MonthlyBudget } from '../models/MonthlyBudget';
import { Excess } from '../models/Excess';

const Api_Url = 'https://localhost:44325/';

@Injectable({
  providedIn: 'root'
})
export class MonthlyBudgetService {

  constructor(private http: HttpClient) { }

  getMonths(id: number, year: number) {
    return this.http.get(`${Api_Url}api/Monthly/${id}?year=${year}`, { headers: this.getHeaders() });
  }

  updateExcess(month: Excess,) {
    return this.http.put(`${Api_Url}api/MonthExcess`, {month}, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set(`Authorization`, `Bearer ${localStorage.getItem('id_token')}`);
  }
}
