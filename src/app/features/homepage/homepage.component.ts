import { Component } from '@angular/core';
import { Specialists } from 'src/app/core/models/specialist.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  specialists: Specialists[] = [
    {
      id: '1', name: 'Dr. Michelle Lind', info: 'Dr. Michelle Lind supervises new graduates that are working towards their license in social work, and or mental health. She is also the author of the book The Long Arm of PSTD.Michelle Lind holds a Doctor of Health Sciences from Nova Southeastern University, and a Master’s in Social Workfrom Barry University.',
      image: 'assets/img/psychologist-1.jpeg'
    },
    {
      id: '2', name: 'Dr.Elizabeth Strong', info: 'Now in practice for over a decade, Liz is a Licensed Mental Health Counselor in Central Florida, working with individuals and groups in a variety of settings. She uses her training and experience in the field to help those struggling with anxiety, eating disorders, infertility, relationship, and life transition issues. She has served on the board of The Mental Health Counselors of Central Florida, as well as The Eating Disorder Network of Central Florida.',
      image: 'assets/img/psychologist-2.jpeg'
    },
    {
      id: '3', name: 'Dr.Tonia Cassaday', info: 'Tonia Cassaday is a highly qualified mental health professional with nearly twenty-five years of work experience to include being a faculty member, clinical instructor, researcher, and writer at the Medical University of South Carolina.  Ms. Cassaday has directed a mental health/substance abuse crisis stabilization unit and has seven years of experience providing individual, couples, and group psychotherapy to children, adolescents, and adults.',
      image: 'assets/img/psychologist-3.jpeg'
    },
    {
      id: '4', name: 'Dr.Dawn Brown', info: 'Dawn Brown is a Board Certified Nationally Certified Counselor who has been a counselor for 20 years. Her counseling work includes private practice (both face to face and online), psychiatric treatment programs to include inpatient, outpatient, intensive outpatient, and partial hospitalization programs. She is particularly interested in researching, writing, and working with depression, anxiety and trauma patients.',
      image: 'assets/img/psychologist-4.jpeg'
    }
  ]

}
