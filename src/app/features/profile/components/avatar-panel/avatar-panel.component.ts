import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-avatar-panel',
  templateUrl: './avatar-panel.component.html',
  styleUrls: ['./avatar-panel.component.scss']
})
export class AvatarPanelComponent {

  public panelOpenState: boolean = false
  public avatar: string = ''
  public changeAvatar: boolean = false

  protected avatarFormControl = new FormControl();


  protected add(): void {
    if (!this.avatarFormControl.value) {
      throw new Error('Change email failed');
    }
    this.avatar = this.avatarFormControl.value
  }
}
