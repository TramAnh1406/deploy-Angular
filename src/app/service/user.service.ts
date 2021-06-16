import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getAPI(endpoint: string){
    let url = this.baseUrl + endpoint;
    return this.http.get(url);

  }

  getById(endpoint: string, id: number){
    let url = this.baseUrl + endpoint + "/" + id;
    return this.http.get(url)
  }

}
