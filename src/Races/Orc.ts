import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  static instancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instancesCreated += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.instancesCreated;
  }
}