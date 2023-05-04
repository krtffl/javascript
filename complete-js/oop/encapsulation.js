class Car {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going now at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going now at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class ElectricCar extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}, with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
car1.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();
console.log(car1.speedUS);
console.log(car2.speedUS);
car1.speedUS = 200;
console.log(car1.speedUS);

const car3 = new ElectricCar('Tesla', 90, 100);
car3.accelerate();
car3.accelerate();
car3.accelerate();
car3.accelerate();
car3.chargeBattery(80);
car3.chargeBattery(90);
car3.brake();

car3.accelerate().accelerate().chargeBattery(100).accelerate();
