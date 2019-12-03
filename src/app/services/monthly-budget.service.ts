import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MonthlyBudget } from '../models/MonthlyBudget';
import { Excess } from '../models/Excess';

const Api_Url = 'https://moneyme20191202065615.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class MonthlyBudgetService {

  constructor(private http: HttpClient) { }

  getMonths(id: number, year: number) {
    return this.http.get(`${Api_Url}api/Monthly/${id}?year=${year}`, { headers: this.getHeaders() });
  }

  updateExcess(id: number, year: number) {
    return this.http.put(`${Api_Url}api/MonthExcess?id=${id}&year=${year}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set(`Authorization`, `Bearer ${localStorage.getItem('id_token')}`);
  }
}
