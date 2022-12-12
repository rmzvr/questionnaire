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

const token = localStorage.getItem('token')?.toString()
const userId = localStorage.getItem('userId')?.toString()


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
            'http://localhost:8088/users/1', httpOptions

        ) as Observable<User>;
    }

    public editAvatar(avatar: FormData): Observable<Avatar> {

        return this.http.post(
            'http://localhost:8088/avatars',
            avatar, httpOptions
        ) as Observable<Avatar>;
    }

    public deleteAvatar() {
        return this.http.delete(
            'http://localhost:8088/avatars',
            httpOptions
        );
    }

    public changePassword(passwords: Password): Observable<Password> {

        return this.http.post(
            'http://localhost:8088/authentication/reset-password',
            passwords, httpOptions
        ) as Observable<Password>;
    }

    public addAdditionalInfo(additionalInfo: AdditionalInfo): Observable<AdditionalInfo> {
        console.log(additionalInfo)
        return this.http.patch(

            `http://localhost:8088/users/${userId}`,
            additionalInfo, httpOptions
        ) as Observable<AdditionalInfo>;
    }
    //todo
    public getResultHistory(): Observable<Result[]> {
        return this.http.get(
            `http://localhost:8088/users/${userId}/history`, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
        }

        ) as Observable<Result[]>;
    }

}