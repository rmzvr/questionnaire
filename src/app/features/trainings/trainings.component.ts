import { Component } from '@angular/core';
import { Article } from './mock-data/article';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent {

  public articles = Article
}
