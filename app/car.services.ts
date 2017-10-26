import { Injectable } from '@angular/core';

export class Car {
  name = 'Avocado Motors';
  constructor(public engine: Engine, public tires: Tires) { }

  get description() {
    return `${this.name} car with ` +
      `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
  }
}

export class Engine {
  cylinders = 8;
}

export class Tires {
  make = 'Flintstone';
  model = 'Square';
}

@Injectable()
export class EngineService {
  id = 'E1';
  getEngine() { return new Engine(); }
}

@Injectable()
export class EngineService2 {
  id = 'E2';
  getEngine() {
    const eng = new Engine();
    eng.cylinders = 10;
    return eng;
  }
}

@Injectable()
export class EngineService3 {
  id = 'E3';
  getEngine() {
    const eng = new Engine();
    eng.cylinders = 18;
    return eng;
  }
}

@Injectable()
export class TiresService {
  id = 'T1';
  getTires() { return new Tires(); }
}

@Injectable()
export class CarService {
  id = 'C1';
  constructor(
    protected engineService: EngineService,
    protected tiresService: TiresService) { }

  getCar() {
    console.log("car1")
    return new Car(
      this.engineService.getEngine(),
      this.tiresService.getTires());
  }

  get name() {
    return `${this.id}-${this.engineService.id}-${this.tiresService.id}`;
  }
}

@Injectable()
export class CarService2 extends CarService {
  id = 'C2';
  constructor(
    protected engineService: EngineService,
    protected tiresService: TiresService) {
    super(engineService, tiresService);
  }
  getCar() {
    console.log("car2")
    const car = super.getCar();
    car.name = 'BamBam Motors, BroVan 2000';
    return car;
  }
}

@Injectable()
export class CarService3 extends CarService {
  id = 'C3';
  constructor(
    protected engineService: EngineService,
    protected tiresService: TiresService) {
    super(engineService, tiresService);
  }
  getCar() {
    console.log("car3")
    const car = super.getCar();
    car.name = 'Chizzamm Motors, Calico UltraMax Supreme';
    return car;
  }
}
