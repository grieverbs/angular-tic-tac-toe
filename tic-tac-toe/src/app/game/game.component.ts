import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [SquareComponent, CommonModule, MatGridListModule, MatButtonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  isXPlayer: boolean = true;
  gameInitialized: boolean = false;
  squares: any[] = Array(9).fill(null);
  winner: string = "";
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

  constructor() {}

  ngOnInit(): void {
  }

  get player() {
    return this.isXPlayer ? "X" : "O";
  }

  updateBoard(index: number) {
    // if square null, mark player into square
    if (this.squares[index] == null) {
      this.gameInitialized = true;
      this.squares.splice(index, 1, this.player);
      
      this.checkWin(this.player);
      if (this.winner == "" && !this.hasEmptySquare()) {
        this.winner = "Draw"
      }
      // Swap player
      this.isXPlayer = !this.isXPlayer;
    }
  }

  newGame() {
    this.isXPlayer = true;
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.gameInitialized = false;
  }

  checkWin(player: string) {
    this.winningCombo.forEach(combo => {
      if (this.squares[combo[0]] == player && this.squares[combo[1]] == player && this.squares[combo[2]] == player) {
        this.winner = player;
        return;
      }
    });
  }

  hasEmptySquare() {
    let result = false;
    this.squares.forEach(square => {
      if (square == null) {
        result = true;
        return;
      };
    });
    return result;
  }
}
