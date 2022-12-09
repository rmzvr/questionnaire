import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdditionalInfo } from '../models/additional-info.model';
import { Avatar } from '../models/avatar.model';
import { Email } from '../models/email.model';
import { Password } from '../models/password.model';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    constructor(private http: HttpClient) { }

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
        return this.http.post(
            'http://localhost:8088//authentication/reset-password',
            passwords
        ) as Observable<Password>;
    }

    public addAdditionalInfo(additionalInfo: AdditionalInfo): Observable<AdditionalInfo> {
        return this.http.post(
            'http://localhost:8088/...',
            additionalInfo
        ) as Observable<AdditionalInfo>;
    }

}