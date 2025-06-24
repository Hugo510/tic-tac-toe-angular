import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Tic Tac Toe';
  protected board: (string | null)[] = Array(9).fill(null);
  protected currentPlayer: 'X' | 'O' = 'X';
  protected winner: string | null = null;
  protected gameOver = false;

  makeMove(index: number): void {
    if (this.board[index] || this.gameOver) {
      return;
    }

    this.board[index] = this.currentPlayer;
    this.winner = this.checkWinner();

    if (this.winner) {
      this.gameOver = true;
    } else if (this.board.every((cell) => cell !== null)) {
      this.gameOver = true;
      this.winner = 'Empate';
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  private checkWinner(): string | null {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // filas
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columnas
      [0, 4, 8],
      [2, 4, 6], // diagonales
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return this.board[a];
      }
    }

    return null;
  }

  resetGame(): void {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
    this.gameOver = false;
  }
}
