import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserDate } from './mock-data/userInfo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent {
  @Input()
  public profileImage: string = 'assets/img/profile.png'
  @Input()
  protected userName: string = ''
  @Input()
  protected birthday: string = '-'
  @Input()
  protected country: string = '-'
  @Input()
  protected favouriteColor: string = '-'
  
  protected  user: User = UserDate

  constructor() { }

}
