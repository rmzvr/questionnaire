import { SigninService } from './../../../features/signin/services/signin.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  context: string = '';

  constructor(public signinService: SigninService) {}
}
