import { Component, OnInit } from '@angular/core';
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
