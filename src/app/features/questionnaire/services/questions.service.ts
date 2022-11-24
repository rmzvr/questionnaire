import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Questions } from '../mock-data/questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questions = Questions;
  private score: number = 0;
  public score$ = new BehaviorSubject(this.score);

  public getQuestions(): any {
    return this.questions;
  }

  public getScore(): any {
    return this.score$
  }

  public increaseScore(value: number): any {
    this.score$.next((this.score += value));
  }

  public decreaseScore(value: number): any {
    this.score$.next((this.score -= value));
  }
}
