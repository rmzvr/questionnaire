import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { TrainingsComponent } from './trainings.component';

import { MatCardModule } from '@angular/material/card';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    TrainingsComponent,
    ArticleCardComponent,
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatCardModule,
    MatDialogModule
    
  ],
  exports: [
    TrainingsComponent
]
})
export class TrainingsModule { }
