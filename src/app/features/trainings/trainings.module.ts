import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { TrainingsComponent } from './trainings.component';

import { MatCardModule } from '@angular/material/card';
import { ArticleCardComponent } from './components/article-card/article-card.component';




@NgModule({
  declarations: [
    TrainingsComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatCardModule
    
  ],
  exports: [
    TrainingsComponent
]
})
export class TrainingsModule { }
