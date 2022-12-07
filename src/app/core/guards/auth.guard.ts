import { SigninService } from './../../features/signin/services/signin.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private signinService: SigninService, private router: Router) {}

  canActivate(): boolean {
    if (!this.signinService.isLoggedIn) {
      this.router.navigate(['/login'])

      return false;
    }

    return true;
  }
}
