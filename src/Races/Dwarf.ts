import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  static instancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instancesCreated += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.instancesCreated;
  }
}