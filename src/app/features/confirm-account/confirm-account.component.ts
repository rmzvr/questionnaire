import { switchMap } from 'rxjs';
import { ConfirmAccountService } from './services/confirm-account.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.scss'],
})
export class ConfirmAccountComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confirmAccountService: ConfirmAccountService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params: Params): any => {
          this.confirmAccountService
            .confirmAccount(params['id'])
            .subscribe(({ token }) => {
              localStorage.setItem('token', token);

              this.router.navigate(['/']);
            });
        })
      )
      .subscribe();
  }
}
