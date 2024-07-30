class Car {
  constructor(model, mark, country, speed = 0) {
    this.model = model;
    this.mark = mark;
    this.country = country;
    this.speed = speed;
  }

  increaseSpeed(amount) {
    this.speed += amount;
    console.log(
      `The speed of ${this.mark} ${this.model} increased by ${amount}. New speed: ${this.speed}`
    );
  }

  decreaseSpeed(amount) {
    this.speed -= amount;
    if (this.speed < 0) this.speed = 0;
    console.log(
      `The speed of ${this.mark} ${this.model} decreased by ${amount}. New speed: ${this.speed}`
    );
  }
}

class Truck extends Car {
  constructor(model, mark, country, speed = 0) {
    super(model, mark, country, speed);
  }

  takeWeight(weight) {
    console.log(`Truck ${this.mark} ${this.model} take ${weight} kg`);
  }
}

class Bus extends Car {
  constructor(model, mark, country, speed = 0) {
    super(model, mark, country, speed);
  }

  takePeople(people) {
    console.log(`Bus ${this.mark} ${this.model} take ${people} people`);
  }
}

class Transporter extends Car {
  constructor(model, mark, country, speed = 0) {
    super(model, mark, country, speed);
  }

  takeCars(cars) {
    console.log(`Transporter ${this.mark} ${this.model} take ${cars} cars`);
  }
}

const truck = new Truck("FH13", "Volvo", "Sweden");
const bus = new Bus("Sprinter", "Mercedes-Benz", "Germany");
const transporter = new Transporter("T5", "Volkswagen", "Germany");

// truck.increaseSpeed(20);
// truck.decreaseSpeed(10);
// truck.takeWeight(1500);

// bus.increaseSpeed(30);
// bus.decreaseSpeed(15);
// bus.takePeople(60);

// transporter.increaseSpeed(25);
// transporter.decreaseSpeed(10);
// transporter.takeCars(8);
