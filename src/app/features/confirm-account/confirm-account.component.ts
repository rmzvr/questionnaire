import {
  EMPTY,
  finalize,
  interval,
  map,
  Observable,
  takeWhile,
  tap,
} from 'rxjs';
import { ConfirmAccountService } from './services/confirm-account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.scss'],
})
export class ConfirmAccountComponent implements OnInit {
  private maxValue: number = 3;
  public countDown$: Observable<number> = EMPTY;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confirmAccountService: ConfirmAccountService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.confirmAccountService.confirmAccount(params['id']).subscribe(() => {
        this.countDown$ = interval(1000).pipe(
          map((value) => this.maxValue - value),
          takeWhile((x) => x >= 0),
          finalize(() => {
            this.router.navigate(['/profile']);
          })
        );
      });
    });
  }
}
