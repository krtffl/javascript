const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going now at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going now at ${this.speed} km/h`);
};

car1.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();
