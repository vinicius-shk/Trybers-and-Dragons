import IEnergy from '../Energy';

export default interface IFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: IEnergy;
  attack(fighter: IFighter): void;
  special?(fighter: IFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}