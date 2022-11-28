import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-form-extended',
  templateUrl: './form-extended.component.html',
  styleUrls: ['./form-extended.component.scss'],
})
export class FormExtendedComponent {
  @Input() public questions: any;

  public currentQuestionIndex: number = 0;
  public name: string = '';

  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  public get progress(): number {
    return (this.currentQuestionIndex / (this.questions.length - 1)) * 100;
  }

  public get currentQuestion(): any {
    return this.questions[this.currentQuestionIndex];
  }

  public get isLastQuestion(): boolean {
    return this.questions.length - 1 !== this.currentQuestionIndex;
  }

  public get selectedOption(): any {
    return this.currentQuestion.selectedOption;
  }

  private set selectedOption(option: any) {
    this.currentQuestion.selectedOption = option;
  }

  private get previousSelectedOption(): any {
    return this.currentQuestion.previousSelectedOption;
  }

  private set previousSelectedOption(option: any) {
    this.currentQuestion.previousSelectedOption = option;
  }

  public previousQuestion(): void {
    this.currentQuestionIndex--;
  }

  public nextQuestion(): void {
    this.currentQuestionIndex++;
  }

  public answer(option: any): void {
    this.selectedOption = option;

    if (this.previousSelectedOption) {
      this.questionsService.decreaseScore(this.previousSelectedOption.value);
    }

    this.questionsService.increaseScore(this.selectedOption.value);

    this.previousSelectedOption = this.selectedOption;
  }

  public navigateToResultPage(): void {
    this.router.navigate([this.router.url + '/result']);
  }
}
