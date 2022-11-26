import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input()
  public profileImage:string = 'assets/img/profile.png'
  @Input()
  protected userName:string = ''
  @Input()
  protected birthday:string = '-'
  @Input()
  protected country:string = '-'
  @Input()
  protected favouriteColor:string = '-'

}
