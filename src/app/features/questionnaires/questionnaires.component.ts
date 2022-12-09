import { Observable, EMPTY } from 'rxjs';
import { QuestionnairesService } from './services/questionnaires.service';
import { Component, OnInit } from '@angular/core';
import { Questionnaire } from './models/questionnaires.model';

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.scss'],
  providers: [QuestionnairesService],
})
export class QuestionnairesComponent implements OnInit {
  public questionnaires$: Observable<Questionnaire[]> = EMPTY;

  constructor(private questionnairesService: QuestionnairesService) {}

  ngOnInit(): void {
    this.questionnaires$ = this.questionnairesService.getQuestionnaires();
  }
}
