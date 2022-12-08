import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';


@Injectable({
    providedIn: 'root',
})
export class TrainingsService {
    constructor(private http: HttpClient) { }

    public getArticles(): Observable<Article[]> {
        
        return this.http.get(
            'http://localhost:8088/articles',
        ) as Observable<Article[]>;
    }



}