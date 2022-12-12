import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-avatar-panel',
  templateUrl: './avatar-panel.component.html',
  styleUrls: ['./avatar-panel.component.scss']
})
export class AvatarPanelComponent implements OnInit {

  @Output() removeAvatar = new EventEmitter<string>()

  public panelOpenState: boolean = false
  public avatar: File | undefined = undefined
  public changeAvatar: boolean = false

  protected avatarFormControl = new FormControl();

  constructor(
    private profileService: ProfileService,
    private router: Router,

  ) { }

  ngOnInit() {

  }

  protected add(event: Event) {
    this.avatar = (event?.target as HTMLInputElement).files?.[0];

    if (!this.avatar) {
      return;
    }

    console.log((event.target as HTMLInputElement).files)

    const formData = new FormData();

    formData.append('avatar', this.avatar);

    this.profileService.editAvatar(formData).subscribe(()=>
    this.router.navigate(['/profile'])

    )

  }

  protected remove(): void {
    this.profileService.deleteAvatar()

    this.removeAvatar.emit('assets/img/profile.png');
  }
}
