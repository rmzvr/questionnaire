import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialists } from '../models/specialist.model';
import { ProjectInfo } from '../models/projectInfo.model';
import { TherapyForm } from '../models/therapyForm.model';
import { CallForm } from '../models/callForm.model';


@Injectable({
    providedIn: 'root',
})
export class HomePageService {
    constructor(private http: HttpClient) { }

    public getProjectInfo(): Observable<ProjectInfo[]> {
        return this.http.get(
            'http://localhost:8088/projects'
        ) as Observable<ProjectInfo[]>;
    }

    public getSpecialists(): Observable<Specialists[]> {
        return this.http.get(
            'http://localhost:8088/specialists'
        ) as Observable<Specialists[]>;
    }

    public postCallInfo(userInfo: CallForm): Observable<CallForm> {
        return this.http.post<CallForm>(
            'http://localhost:8088/specialists',
            userInfo
        );
    }

    public addTherapyInfo(userInfo: TherapyForm): Observable<TherapyForm> {

        return this.http.post<TherapyForm>(
            'http://localhost:8088/specialists',
            userInfo
        );
    }


}