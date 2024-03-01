import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { StateService } from '../state.service';
import { Game } from '../game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  game: Game = new Game();

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

  constructor(private stateService: StateService) {}

  ngAfterContentInit (): void {
    let data = this.stateService.getState(); 
    if (data) {
      console.log(data);
      this.game.isXPlayer = data.isXPlayer
      this.game.gameInitialized = data.gameInitialized;
      this.game.squares = data.squares;
      this.game.winner = data.winner;
    }
  }

  get player() {
    return this.game.isXPlayer ? "X" : "O";
  }

  updateBoard(index: number) {
    // if square null, mark player into square
    if (this.game.squares[index] == null) {
      this.game.gameInitialized = true;
      this.game.squares.splice(index, 1, this.player);
      
      this.checkWin(this.player);
      if (this.game.winner == "" && !this.hasEmptySquare()) {
        this.game.winner = "Draw";
      }
      // Swap player
      this.game.isXPlayer = !this.game.isXPlayer;
      this.stateService.setState(this.game);
    }
  }

  newGame() {
    this.game = new Game();
    this.stateService.clearState();
  }

  checkWin(player: string) {
    this.winningCombo.forEach(combo => {
      if (this.game.squares[combo[0]] == player && this.game.squares[combo[1]] == player && this.game.squares[combo[2]] == player) {
        this.game.winner = player;
        return;
      }
    });
  }

  hasEmptySquare() {
    let result = false;
    this.game.squares.forEach(square => {
      if (square == null) {
        result = true;
        return;
      }
    });
    return result;
  }
}
