import IFighter from '../Fighter/Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _firstPlayer: IFighter,
    private _secondPlayer: IFighter,
  ) {
    super(_firstPlayer);
  }

  public get firstPlayer() {
    return this._firstPlayer;
  }

  public get secondPlayer() {
    return this._secondPlayer;
  }

  public fight(): number {
    let gameOn = true;
    let winner = 0;
    while (gameOn) {
      this.firstPlayer.attack(this._secondPlayer);
      if (this.secondPlayer.lifePoints <= 0) { 
        gameOn = false;
        winner = 1;
        return winner;
      }
      this._secondPlayer.attack(this._firstPlayer);
      if (this.firstPlayer.lifePoints <= 0) {
        gameOn = false;
        winner = -1;
        return winner;
      }
    }
    return winner;
  }
}