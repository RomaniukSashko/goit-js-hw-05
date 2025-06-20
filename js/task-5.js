// Завдання 5
console.log("Завдання 5");

// Напиши клас Car із зазначеними властивостями і методами

class Car {
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance і price.
   */
  static getSpecs(car) {
    console.log(`maxSpeed: ${car.maxSpeed}; speed: ${car.speed}; isOn: ${car.isOn}; distance: ${car.distance}; price: ${car.price}`);
  }

  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   * speed - поточна швидкість, початкова 0
   * price - ціна автомобіля
   * maxSpeed - максимальна швидкість
   * isOn - заведений автомобіль, значення true або false. Спочатку false
   * distance - загальний кілометраж, спочатку 0
   */
  constructor({speed, maxSpeed, isOn, distance, price}) {
    this.speed = speed = 0;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn = false;
    this.distance = distance = 0;
  };

  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */
  get price() {
    this.price;
  };

  set price(newPrice) {
    this.price = newPrice;
  };
  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {
    return this.isOn = true;
  }

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    return this.isOn = false, this.speed = 0;

  }

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    if (value <= this.maxSpeed) {
        this.speed += value;
        return this.speed;
    };
  }

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    if (value >= 0) {
        this.speed -= value;
        return this.speed;
    };
  }

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
        this.distance += this.speed * hours;
        return this.distance;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
