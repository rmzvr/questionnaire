import { Component,Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent {
title:string=''
description:string=''
fullDescription:string =''
createdDate:string=''

constructor(
  public dialog: MatDialogRef<ArticleDetailsComponent>,
  @Inject (MAT_DIALOG_DATA) public data: ArticleDetailsComponent
  ) {}


ngOnInit() {
  this.title = this.data.title;
  this.description = this.data.description;
  this.fullDescription=this.data.fullDescription;
  this.createdDate=this.data.createdDate
}

close(){
  this.dialog.close()

}


}
