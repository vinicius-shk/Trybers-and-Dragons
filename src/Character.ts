import Archetype, { Mage } from './Archetypes';
import IEnergy from './Energy';
import IFighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements IFighter {
  private _race: Race = new Elf(this.name, this.dexterity);
  private _archetype: Archetype = new Mage(this.race.name);
  private _maxLifePoints: number = this.race.maxLifePoints / 2;
  private _lifePoints: number = this.maxLifePoints;
  private _strength: number = getRandomInt(1, 10);
  private _defense: number = getRandomInt(1, 10);
  private _dexterity: number = getRandomInt(1, 10);
  private _energy: IEnergy = {
    type_: this.archetype.energyType,
    amount: getRandomInt(1, 10),
  };

  constructor(private _name: string) {}

  public get race() {
    return this._race;
  }

  public get archetype() {
    return this._archetype;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  }

  public get lifePoints() {
    return this._lifePoints;
  }

  public get strength() {
    return this._strength;
  }

  public get defense() {
    return this._defense;
  }

  public get dexterity() {
    return this._dexterity;
  }

  public get energy() {
    return { ...this._energy };
  }

  public get name() {
    return this._name;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) this._lifePoints -= damage;
    else this._lifePoints -= 1;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  public attack(enemy: IFighter): void {
    const attackValue = this.strength;
    enemy.receiveDamage(attackValue);
  }

  public levelUp(): void {
    this._defense += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    if (this.maxLifePoints >= this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._energy.amount = 10;
    this._lifePoints = this.maxLifePoints;
  }

  public special(fighter: IFighter): void {
    const cost = 4;
    const damage = this.strength * 1.5;
    if (this.energy.amount < cost) throw new Error('Insuficient energy');
    this._energy.amount -= cost;
    fighter.receiveDamage(damage);
  }
}