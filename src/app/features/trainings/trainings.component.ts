import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { Article } from './mock-data/article';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent {

  constructor(
    public dialog: MatDialog,
  ) { }

  public articles = Article


  protected openDialog(title: string, description: string, fullDescription: string, createdDate: string): void {
    this.dialog.open(ArticleDetailsComponent,
      { data: { title, description, fullDescription, createdDate } })
  }
}
