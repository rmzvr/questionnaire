import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../models/signup.model';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  public register(credentials: Credentials): Observable<Credentials> {
    return this.http.post(
      'http://localhost:8088/signup/user',
      credentials
    ) as Observable<Credentials>;
  }
}
