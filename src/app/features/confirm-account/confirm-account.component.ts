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
    this.activatedRoute.params.subscribe((params: any) => {
      this.confirmAccountService
        .confirmAccount(params['id'])
        .subscribe((res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userId', res.userResponseDTO.id);

          this.router.navigate(['/']);
        });
    });
  }
}
