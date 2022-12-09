import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { Article } from './models/article.model';
import { TrainingsService } from './services/trainings.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  public articles: Observable<Article[]> = EMPTY

  constructor(
    public dialog: MatDialog,
    public trainingsService: TrainingsService
  ) { }

  ngOnInit(): void {
    this.articles = this.trainingsService.getArticles();
   this.trainingsService.getArticles().subscribe((item)=> console.log(item))

  }

  protected openDialog(item: Article): void {
    this.dialog.open(ArticleDetailsComponent,
      { data: item })
  }
}
