import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Answer, Question } from '../../models/questionnaire.model';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() public questions!: Question[];

  public currentQuestionIndex: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private questionsService: QuestionsService
  ) {}

  ngOnInit(): void {}

  public get progress(): number {
    return (this.currentQuestionIndex / (this.questions.length - 1)) * 100;
  }

  public get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  public get isLastQuestion(): boolean {
    return this.questions.length - 1 !== this.currentQuestionIndex;
  }

  public get selectedAnswer(): Answer {
    return this.currentQuestion.selectedAnswer as Answer;
  }

  private set selectedAnswer(answer: Answer) {
    this.currentQuestion.selectedAnswer = answer as Answer;
  }

  public previousQuestion(): void {
    this.currentQuestionIndex--;
  }

  public nextQuestion(): void {
    this.currentQuestionIndex++;
  }

  public selectAnswer(answer: Answer): void {
    this.selectedAnswer = answer;

    this.questionsService.saveAnswer({
      questionId: this.currentQuestion.id,
      answerId: answer.id,
    });
  }

  public finishQuestionnaire(): void {
    const questionnaireId: string = this.activatedRoute.snapshot.params['id'];

    this.questionsService.sendResult(questionnaireId).subscribe(() => {
      this.router.navigate([this.router.url + '/result']);
    });
  }
}
