import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'https://localhost:44325'

@Injectable ({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get(`${Api_Url}/api/Users`, { headers: this.getHeaders() });
    }

    deleteUsers(id) {
        return this.http.delete(`${Api_Url}/api/Users?id=${id}`, { headers: this.getHeaders() });
    }

    private getHeaders() {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}