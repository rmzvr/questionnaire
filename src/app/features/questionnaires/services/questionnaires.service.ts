import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/constants';

@Injectable()
export class QuestionnairesService {
  constructor(private http: HttpClient) {}

  public getQuestionnaires(): Observable<any> {
    return this.http.get(`${BASE_URL}/questionnaires`);
  }
}
