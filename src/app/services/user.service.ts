import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from 'src/environments/environment.prod';

@Injectable ({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get(`${APIURL}/api/Users`, { headers: this.getHeaders() });
    }

    getUserById(id) {
        return this.http.get(`${APIURL}/api/UserById/${id}`, {headers: this.getHeaders() });
    }

    deleteUsers(id: number, email: string) {
        return this.http.delete(`${APIURL}/api/Users?id=${id}&email=${email}`, { headers: this.getHeaders() });
    }

    private getHeaders() {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}