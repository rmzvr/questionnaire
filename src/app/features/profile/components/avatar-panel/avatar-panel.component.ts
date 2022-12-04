import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  ngOnInit() {

  }

  protected add(): void {
    if (!this.avatarFormControl.value) {
      throw new Error('Change email failed');
    }
    this.avatar = this.avatarFormControl.value
  }

  protected remove(): void {
    this.removeAvatar.emit('assets/img/profile.png');
  }
}
