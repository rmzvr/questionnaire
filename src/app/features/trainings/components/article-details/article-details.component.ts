import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent {
  public title: string = ''
  public description: string = ''
  public fullDescription: string = ''
  public createdDate: string = ''

  constructor(
    public dialog: MatDialogRef<ArticleDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArticleDetailsComponent
  ) { }


  ngOnInit() {
    this.title = this.data.title;
    this.description = this.data.description;
    this.fullDescription = this.data.fullDescription;
    this.createdDate = this.data.createdDate
    console.log(this.data.fullDescription)
  }

  protected close(): void {
    this.dialog.close()

  }

}
