import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  static instancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instancesCreated += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.instancesCreated;
  }
}