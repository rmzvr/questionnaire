import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../models/signup.model';
import { BASE_URL } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  public register(credentials: Credentials): Observable<Credentials> {
    return this.http.post(
      `${BASE_URL}/signup/user`,
      credentials
    ) as Observable<Credentials>;
  }
}
