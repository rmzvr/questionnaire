import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdditionalInfo } from '../models/additional-info.model';
import { Avatar } from '../models/avatar.model';
import { Email } from '../models/email.model';
import { Password } from '../models/password.model';
import { User } from '../models/user.model';
import { HttpHeaders } from '@angular/common/http';
import { Result } from '../models/result.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public token: any;
  public userId: any;

  public httpOptions: any;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token')?.toString();
    this.userId = localStorage.getItem('userId')?.toString();

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }),
    };
  }

  public getUserInfo(): Observable<User> {
    return this.http.get(
      `http://localhost:8088/users/${this.userId}`,
      this.httpOptions
    ) as Observable<any>;
  }

  public editAvatar(avatar: FormData): Observable<Avatar> {
    return this.http.post(
      'http://localhost:8088/avatars',
      avatar,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    ) as Observable<any>;
  }

  public deleteAvatar() {
    return this.http.delete('http://localhost:8088/avatars', this.httpOptions);
  }

  public changePassword(passwords: Password): Observable<Password> {
    return this.http.post(
      'http://localhost:8088/authentication/reset-password',
      passwords,
      this.httpOptions
    ) as Observable<any>;
  }

  public addAdditionalInfo(
    additionalInfo: AdditionalInfo
  ): Observable<AdditionalInfo> {
    console.log(additionalInfo);
    return this.http.patch(
      `http://localhost:8088/users/${this.userId}`,
      additionalInfo,
      this.httpOptions
    ) as Observable<AdditionalInfo>;
  }
  //todo
  public getResultHistory(): Observable<Result[]> {
    return this.http.get(`http://localhost:8088/users/${this.userId}/history`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }) as Observable<Result[]>;
  }
}
