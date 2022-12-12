import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() avatarName :string = ''
  public panelOpenState: boolean = false
  public avatar: File | undefined = undefined
  public changeAvatar: boolean = false

  protected avatarFormControl = new FormControl();

  constructor(
    private profileService: ProfileService,
    private router: Router,

  ) { }

  ngOnInit() {
console.log(this.avatarName)
  }

  protected add(event: Event) {
    this.avatar = (event?.target as HTMLInputElement).files?.[0];

    if (!this.avatar) {
      return;
    }

    const formData = new FormData();

    formData.append('avatar', this.avatar);

    this.profileService.editAvatar(formData).subscribe(() =>
      this.router.navigate(['/profile'])

    )

  }

  protected remove(): void {
    this.removeAvatar.emit();
  }
}
