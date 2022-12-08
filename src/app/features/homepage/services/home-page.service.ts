import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialists } from '../models/specialist.model';
import { ProjectInfo } from '../models/projectInfo.model';


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

    
}