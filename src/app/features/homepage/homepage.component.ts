import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { ProjectInfo } from 'src/app/features/homepage/models/projectInfo.model';
import { Specialists } from 'src/app/features/homepage/models/specialist.model';
import { HomePageService } from './services/home-page.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public specialists: Observable<Specialists[]> = EMPTY
  public projectInfo: Observable<ProjectInfo[]> = EMPTY

  constructor(
    private homePageService: HomePageService,
    private router: Router) { }

  ngOnInit(): void {
    this.specialists = this.homePageService.getSpecialists();
    this.projectInfo = this.homePageService.getProjectInfo();
  }

}
