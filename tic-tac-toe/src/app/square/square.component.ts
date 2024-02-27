import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  // https://angular.io/api/core/Input
  // Avoid using the same name between parent and child components
  @Input() squareType!: "X" | "O";  // Limiting value style and allows for null
}
