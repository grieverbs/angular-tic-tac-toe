import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [SquareComponent, CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  isXPlayer: boolean = true;
  squares: any[] = Array(9).fill(null);
  message: string = "";
  // You can kinda see the grid in the first 3 rows.  Then we check the columns and diagonals.
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

  test: string ="X";

  constructor() {}

  ngOnInit(): void {
  }

  get player() {
    return this.isXPlayer ? "X" : "O";
  }

  markPlayer(index: number) {
    // if square null, mark player into square
    if (this.squares[index] == null) {
      this.squares.splice(index, 1, this.player);
      // Swap player
      this.isXPlayer = !this.isXPlayer;
    }
  }

  newGame() {
    this.isXPlayer = true;
    this.squares = Array(9).fill(null);
    this.message = "";
  }
}
