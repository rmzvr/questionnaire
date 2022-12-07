import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class ConfirmAccountService {
  constructor(private http: HttpClient) {}

  public confirmAccount(token: string): Observable<string> {
    return this.http.get(
      `${BASE_URL}/signup/confirm-email/${token}`
    ) as Observable<string>;
  }
}
