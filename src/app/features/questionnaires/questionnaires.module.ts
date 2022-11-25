import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnairesComponent } from './questionnaires.component';
import { QuestionnairesRoutingModule } from './questionnaires-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [QuestionnairesComponent],
  imports: [
    CommonModule,
    QuestionnairesRoutingModule,
    CoreModule,
    MatGridListModule,
    MatCardModule,
  ],
})
export class QuestionnairesModule {}
