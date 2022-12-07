import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../models/signin.model';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor(private http: HttpClient) {}

  public login(credentials: Credentials): Observable<Credentials> {
    return this.http.post(
      'http://localhost:8088/authentication/login',
      credentials
    ) as Observable<Credentials>;
  }
}
