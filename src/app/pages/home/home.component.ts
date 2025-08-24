import { Component } from '@angular/core';
import { InputComponent } from '../../components/ui/input/input.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [InputComponent],
})
export class HomeComponent {
  constructor() {}
}
