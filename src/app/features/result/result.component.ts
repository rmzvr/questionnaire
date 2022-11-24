import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questionnaire/services/questions.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  public score$: any;
  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.score$ = this.questionsService.getScore();
  }
}
