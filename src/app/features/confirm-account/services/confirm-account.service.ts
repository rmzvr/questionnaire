import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfirmAccountService {
  constructor(private http: HttpClient) {}

  public confirmAccount(token: string): Observable<string> {
    return this.http.get(
      `http://localhost:8088/signup/confirm-email/${token}`
    ) as Observable<string>;
  }
}
