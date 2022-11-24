import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  public questions: any;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    if (!this.questions?.length) {
      this.questions = this.questionsService.getQuestions();
    }
  }
}
