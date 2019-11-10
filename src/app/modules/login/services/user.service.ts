import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL: string = environment.baseURL;
  private endpoint: string = 'users'
  
  constructor(private http: HttpClient) { }

  getUserByEmail(email: string){
    const url: string = `${this.baseURL}${this.endpoint}?email=${email}`;
    return this.http.get(url);
  }
}
