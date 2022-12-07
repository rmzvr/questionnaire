import { EmailDialogComponent } from './components/email-dialog/email-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../questionnaire/services/questions.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  public score$: any;

  constructor(
    private questionsService: QuestionsService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.score$ = this.questionsService.getScore();
  }

  public navitageToQuestionnairePage(): void {
    this.router.navigate([this.router.url.slice(0, -6)]);
  }

  public openEmailDialog(): void {
    const dialogRef = this.dialog.open(EmailDialogComponent, {
      width: '470px',
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (!result) {
          return;
        }

        sessionStorage.setItem('email', result);

        this.openRegisterDialog();
      });
  }

  public openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '470px',
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        sessionStorage.setItem('password', result);

        this.router.navigate(['/profile']);
      });
  }
}
