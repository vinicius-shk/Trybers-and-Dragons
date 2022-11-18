import ISimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements ISimpleFighter {
  private _lifePoints = 85;
  private _strength = 63;

  public get lifePoints() {
    return this._lifePoints;
  }

  public get strength() {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = this.lifePoints - attackPoints;
    if (damage) this._lifePoints -= damage;
    if (!this.lifePoints) this._lifePoints = -1;
    return this.lifePoints;
  }

  public attack(enemy: ISimpleFighter): void {
    const damage = this.strength;
    enemy.receiveDamage(damage);
  }
}