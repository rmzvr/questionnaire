import { BASE_URL } from 'src/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials, LoginResponse } from '../models/signin.model';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor(private http: HttpClient) {}

  public login(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post(
      `${BASE_URL}/authentication/login`,
      credentials
    ) as Observable<LoginResponse>;
  }

  public get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
