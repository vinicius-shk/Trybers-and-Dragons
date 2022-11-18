import IEnergy from '../Energy';
import ISimpleFighter from './SimpleFighter';

export default interface IFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: IEnergy;
  attack(fighter: IFighter | ISimpleFighter): void;
  special?(fighter: IFighter | ISimpleFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}