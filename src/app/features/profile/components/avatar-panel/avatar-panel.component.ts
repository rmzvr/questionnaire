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
  public avatar: string = ''
  public changeAvatar: boolean = false

  protected avatarFormControl = new FormControl();

  constructor(
    private profileService: ProfileService,
    private router: Router

  ) { }

  ngOnInit() {

  }

  protected add(): void {
    if (!this.avatarFormControl.value) {
      throw new Error('Change email failed');
    }
    // this.profileService.editAvatar(this.avatar)

  }

  protected remove(): void {
        this.profileService.deleteAvatar()

    this.removeAvatar.emit('assets/img/profile.png');
  }
}
