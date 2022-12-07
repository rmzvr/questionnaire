import { Result } from './../models/questionnaire.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Answer,
  ExtendedAnswer,
  Question,
} from '../models/questionnaire.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private baseUrl: string = 'http://localhost:8088';

  public answers = new BehaviorSubject<ExtendedAnswer[]>([]);

  constructor(private http: HttpClient) {}

  public getQuestions(id: string): Observable<Question[]> {
    return this.http.get(
      `${this.baseUrl}/questionnaires/${id}/questions`
    ) as Observable<Question[]>;
  }

  public saveAnswer(answer: ExtendedAnswer): void {
    const answers: ExtendedAnswer[] = this.answers.value;

    const answerId: number = answers.findIndex(
      (a) => a.questionId === answer.questionId
    );

    if (answerId === -1) {
      this.answers.next([...answers, answer]);

      return;
    }

    const copy: ExtendedAnswer[] = [...answers];

    copy[answerId] = answer;

    this.answers.next(copy);
  }

  public sendResult(id: string): Observable<Result> {
    return this.http.post(`${this.baseUrl}/questionnaires/${id}/quiz`, {
      questionnaireId: id,
      answers: this.answers.value,
    }) as Observable<Result>;
  }
}
