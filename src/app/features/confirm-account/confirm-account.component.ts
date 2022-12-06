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
  private maxValue: number = 5;
  public countDown$: Observable<number> = EMPTY;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confirmAccountService: ConfirmAccountService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParam: any) => {
      this.confirmAccountService
        .confirmAccount(queryParam['token'])
        .subscribe(() => {
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
