import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../questionnaire/services/questions.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  public score$: any;

  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.score$ = this.questionsService.getScore();
  }

  public navitageToQuestionnairePage(): void {
    this.router.navigate([this.router.url.slice(0, -6)]);
  }
}
