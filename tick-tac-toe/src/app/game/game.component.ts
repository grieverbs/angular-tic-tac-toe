import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  isXPlayer: boolean = true;
  squares: any[] = Array(9).fill(null);
  message: string = "";
  winningCombo: any[] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  constructor() {}

  ngOnInit(): void {
  }
  get player() {
    return this.isXPlayer ? "X" : "O";
  }

  clickHandler(index: number) {
    // if validity is true, swap player and fill square.
    this.isXPlayer = !this.isXPlayer;
  }

  scanAndRender() {

  }
}
