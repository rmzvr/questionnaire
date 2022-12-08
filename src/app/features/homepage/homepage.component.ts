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
    
    // this.homePageService.getSpecialists().subscribe((specialists)=>{
    //   console.log(specialists)
    // })
  }

  // specialists: Specialists[] = [
  //   {
  //     id: '1', name: 'Dr. Michelle Lind', info: 'Dr. Michelle Lind supervises new graduates that are working towards their license in social work, and or mental health. She is also the author of the book The Long Arm of PSTD.Michelle Lind holds a Doctor of Health Sciences from Nova Southeastern University, and a Master’s in Social Workfrom Barry University.',
  //     image: 'assets/img/psychologist-1.jpeg'
  //   },
  //   {
  //     id: '2', name: 'Dr.Elizabeth Strong', info: 'Now in practice for over a decade, Liz is a Licensed Mental Health Counselor in Central Florida, working with individuals and groups in a variety of settings. She uses her training and experience in the field to help those struggling with anxiety, eating disorders, infertility, relationship, and life transition issues. She has served on the board of The Mental Health Counselors of Central Florida, as well as The Eating Disorder Network of Central Florida.',
  //     image: 'assets/img/psychologist-2.jpeg'
  //   },
  //   {
  //     id: '3', name: 'Dr.Tonia Cassaday', info: 'Tonia Cassaday is a highly qualified mental health professional with nearly twenty-five years of work experience to include being a faculty member, clinical instructor, researcher, and writer at the Medical University of South Carolina.  Ms. Cassaday has directed a mental health/substance abuse crisis stabilization unit and has seven years of experience providing individual, couples, and group psychotherapy to children, adolescents, and adults.',
  //     image: 'assets/img/psychologist-3.jpeg'
  //   },
  //   {
  //     id: '4', name: 'Dr.Dawn Brown', info: 'Dawn Brown is a Board Certified Nationally Certified Counselor who has been a counselor for 20 years. Her counseling work includes private practice (both face to face and online), psychiatric treatment programs to include inpatient, outpatient, intensive outpatient, and partial hospitalization programs. She is particularly interested in researching, writing, and working with depression, anxiety and trauma patients.',
  //     image: 'assets/img/psychologist-4.jpeg'
  //   }
  // ]

  // projectInfo: ProjectInfo[] = [
  //   { id: '1', title: 'What we do?', description: 'Our company provides a psychological assistance service (consultations with psychologists, trainings and therapy). We have created a brand new website, a tool that will help us help more people and support our clients and as the first step for understanding yourself and your state is to understand what you feel, what emotions you are experiencing and why. It is often difficult for people to identify specific emotions and therefore we want to help them with this first step with the help of an emotion map. With the help of simple psychological questionnaires, we can help define an emotion that will build a personal map of emotions for each of our users. If the user is worried that he feels a certain range of emotions and this interferes with the quality of his life, we will offer him simple tips to cope with emotions or work out his states in more detail using the services of our service. ' },
  //   { id: '2', title: 'Why trust us?', description: 'Our questions and algorithms are unique to us and are built on decades of study in vocational testing. Our algorithms continuously improve with millions of daily data points to give you real-time accuracy. We firmly believe that you own your data, not us. We never sell your personal data to third parties.' }
  // ]
}
