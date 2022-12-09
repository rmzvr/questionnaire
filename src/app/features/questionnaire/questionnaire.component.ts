import { EMPTY, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './services/questions.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from './models/questionnaire.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  public questions$: Observable<Question[]> = EMPTY;

  constructor(
    private router: ActivatedRoute,
    private questionsService: QuestionsService
  ) {}

  ngOnInit(): void {
    const questionnaireId: string = this.router.snapshot.params['id'];

    this.questions$ = this.questionsService.getQuestions(questionnaireId);
  }
}
