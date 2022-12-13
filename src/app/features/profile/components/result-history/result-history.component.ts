import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { Result } from '../../models/result.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-result-history',
  templateUrl: './result-history.component.html',
  styleUrls: ['./result-history.component.scss']
})
export class ResultHistoryComponent implements OnInit {
public resultHistory: Observable<Result[]> = EMPTY

  constructor(
    private profileService: ProfileService,
    private router: Router

  ) { }

  ngOnInit(): void {
   this.resultHistory = this.profileService.getResultHistory()
    
  }

}
