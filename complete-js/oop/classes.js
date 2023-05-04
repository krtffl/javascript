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
