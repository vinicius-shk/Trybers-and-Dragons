import IFighter from '../Fighter/Fighter';
import ISimpleFighter from '../Fighter/SimpleFighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _firstPlayer: IFighter,
    private _monsters: ISimpleFighter[] | IFighter[],
  ) {
    super(_firstPlayer);
  }

  public get firstPlayer(): IFighter {
    return this._firstPlayer;
  }

  public get monsters(): ISimpleFighter[] {
    return this._monsters;
  }

  private checkEnemyHealth(enemy: IFighter | ISimpleFighter): void {
    if (enemy.lifePoints === -1) this._monsters.splice(0, 1);
  }

  private verifyLivingEnemies(): boolean {
    if (!this.monsters.length) return true;
    return false;
  }

  public fight(): number {
    const gameOn = true;
    let winner = 0;
    while (gameOn) {
      this.firstPlayer.attack(this.monsters[0]);
      
      this.checkEnemyHealth(this.monsters[0]);
      if (this.verifyLivingEnemies()) {
        winner = 1;
        return winner;
      }
      this.monsters.forEach((monster) => monster.attack(this.firstPlayer));
      if (this.firstPlayer.lifePoints === -1) {
        winner = -1;
        return winner;
      }
    }
    return winner;
  }
}