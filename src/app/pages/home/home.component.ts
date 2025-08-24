import { Component } from '@angular/core';
import { Question } from '../../../static/questions';
import { FooterComponent } from '../../components/footer/footer.component';
import { InputComponent } from '../../components/ui/input/input.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [InputComponent, FooterComponent],
})
export class HomeComponent {
  questions: Question[] = Question;
}
