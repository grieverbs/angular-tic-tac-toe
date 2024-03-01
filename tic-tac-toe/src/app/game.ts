export class Game {
    isXPlayer: boolean = true;
    gameInitialized: boolean = false;
    squares: any[] = Array(9).fill(null);
    winner: string = "";
}
