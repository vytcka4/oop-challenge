// test;
// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multip

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.acce = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

const car1 = new Car("audi", 70);
const car2 = new Car("mersas", 50);

console.log(car1);

car1.acce();

// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK �
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelarate() {
    this.speed = this.speed + 10;
    console.log(this.speed);
  }
  brake() {
    this.speed = this.speed -5;
    console.log(this.speed);
  }

  get speedUS() {
    return (this.speed *= 1.6) 
  }
  set speedUS(){

  }
}



// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument 
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, 
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate', 
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK 

