import Archetype from './Archetype';
import IEnergy, { EnergyType } from '../Energy';

export default class Ranger extends Archetype implements IEnergy {
  static createdInstances = 0;
  type_: EnergyType = 'stamina';
  private _amount: number;
  constructor(name: string) {
    super(name);
    Ranger.createdInstances += 1;
    this._amount = this.cost;
  }

  public get type(): EnergyType {
    return this.type_;
  }
  
  public get energyType(): EnergyType {
    return this.type;
  }

  public get amount(): number {
    return this._amount;
  }

  public set amount(value: number) {
    this._amount = value;
  }

  static createdArchetypeInstances(): number {
    return Ranger.createdInstances;
  }
}
