import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuestionnairesService {
  private baseUrl: string = 'http://localhost:8088';

  constructor(private http: HttpClient) {}

  public getQuestionnaires(): Observable<any> {
    return this.http.get(`${this.baseUrl}/questionnaires`);
  }
}
