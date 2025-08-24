import { Component, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from '../../../../static/questions';

interface IAnswers {
  id: string;
  answer: string;
}

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class InputComponent {
  @Input() question: Question[] = [];
  answers: IAnswers[] = [];
  inputValue: string = '';
  currentIndex: number = 0;

  get currentQuestion(): Question | undefined {
    return this.question?.[this.currentIndex];
  }

  nextQuestion() {
    if (this.currentIndex < this.question.length) {
      const answerItem = this.answers.find(
        (item) => item.id === this.question[this.currentIndex]?.id
      );
      if (answerItem) {
        answerItem.answer = this.inputValue;
      } else {
        this.answers.push({
          id: this.question[this.currentIndex]?.id,
          answer: this.inputValue,
        });
      }
      console.log(this.inputValue);
      this.inputValue = '';
      if (this.currentIndex < this.question.length - 1) {
        this.currentIndex++;
        return;
      }
    }
    console.log('gerar readgenerate', this.answers);
  }

  previousQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.answers.filter((item) => {
        if (item.id === this.question[this.currentIndex]?.id) {
          this.inputValue = item.answer;
        }
      });
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.nextQuestion();
    }
    if (event.key === 'Escape') {
      this.previousQuestion();
    }
  }
}
