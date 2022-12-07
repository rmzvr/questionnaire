import { EmailDialogComponent } from './components/email-dialog/email-dialog.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { take } from 'rxjs';
import { SignupService } from '../signup/services/signup.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private signupService: SignupService
  ) {}

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

        sessionStorage.setItem('name', result.name);
        sessionStorage.setItem('email', result.email);

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
      .subscribe((password) => {
        this.signupService
          .register({
            name: sessionStorage.getItem('name') ?? '',
            email: sessionStorage.getItem('email') ?? '',
            password,
          })
          .subscribe();
      });
  }
}
