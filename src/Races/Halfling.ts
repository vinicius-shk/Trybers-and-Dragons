import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  static instancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instancesCreated += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.instancesCreated;
  }
}