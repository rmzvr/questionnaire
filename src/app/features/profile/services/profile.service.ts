import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdditionalInfo } from '../models/additional-info.model';
import { Avatar } from '../models/avatar.model';
import { Email } from '../models/email.model';
import { Password } from '../models/password.model';
import { User } from '../models/user.model';
import { HttpHeaders } from '@angular/common/http';

const token = localStorage.getItem('token')?.toString()

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    })
};

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    constructor(private http: HttpClient) { }

    public getUserInfo(): Observable<User> {
        return this.http.get(
            'http://localhost:8088/...',

        ) as Observable<User>;
    }

    public AddAvatar(avatar: Avatar): Observable<Avatar> {
        return this.http.post(
            'http://localhost:8088/...',
            avatar
        ) as Observable<Avatar>;
    }

    public changeEmail(email: Email): Observable<Email> {
        return this.http.post(
            'http://localhost:8088/...',
            email
        ) as Observable<Email>;
    }
    public changePassword(passwords: Password): Observable<Password> {
        console.log(passwords)
        console.log(httpOptions)
        return this.http.post(
            'http://localhost:8088/authentication/reset-password',
            passwords, httpOptions
        ) as Observable<Password>;
    }

    public addAdditionalInfo(additionalInfo: AdditionalInfo): Observable<AdditionalInfo> {
        return this.http.post(
            'http://localhost:8088/...',
            additionalInfo
        ) as Observable<AdditionalInfo>;
    }

}