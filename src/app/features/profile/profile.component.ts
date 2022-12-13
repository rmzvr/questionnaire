import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { User } from 'src/app/features/profile/models/user.model';
import { UserDate } from './mock-data/userInfo';
import { ProfileService } from './services/profile.service';

const placeholder = "url(assets/img/profile.png)";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public token: string | null = null

  protected user: User = {
    id: '',
    image: '',
    name: '',
    email: '',
    password: ''
  }

  public profileImageStyle: SafeStyle = placeholder;


  constructor(
    private profileService: ProfileService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }


  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.profileService.getUserInfo().subscribe((user) => {
      this.user = user

      this.profileService.getAvatar(this.user.image)
      .subscribe((response) => {
         this.profileImageStyle = this.sanitizer.bypassSecurityTrustStyle(`url(${URL.createObjectURL(response)})`);
      });

    })

  }


  public removeItem(): void {
    this.profileService.deleteAvatar(this.user.image).subscribe(() => {
      this.profileImageStyle = placeholder;
    });
  }

  public logout() {
    localStorage.clear()
    this.router.navigate(['/']);
  }

}
