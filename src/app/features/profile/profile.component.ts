import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { User } from 'src/app/features/profile/models/user.model';
import { UserDate } from './mock-data/userInfo';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {
  @Input()
  public profileImage: string = 'assets/img/profile.png'
  @Input()
  protected userName: string = ''
  @Input()
  protected birthday: string = '-'
  @Input()
  protected country: string = '-'
 

  protected user: Observable<User> = EMPTY

  constructor(
    private profileService: ProfileService,
    private router: Router
      ) { }


  ngOnInit(): void {
    this.user = this.profileService.getUserInfo()

  }

  public addItem(removeAvatar: string): void {
    this.profileImage = removeAvatar;
  }

}
