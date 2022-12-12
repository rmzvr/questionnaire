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

  public token: string | null = null

  protected user: User = {
    id: '',
    img: '',
    name: '',
    email: '',
    password: ''
  }

  public profileImage: string = ''


  constructor(
    private profileService: ProfileService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.profileService.getUserInfo().subscribe((user) => {
      this.user = user
    })
    //todo
    this.profileImage = this.user.img || 'assets/img/profile.png'

  }

  public addItem(removeAvatar: string): void {
    this.profileImage = removeAvatar;
  }

  public logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/']);
  }

}
