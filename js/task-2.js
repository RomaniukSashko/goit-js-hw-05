// Завдання 2
console.log("Завдання 2");

// Напиши клас User для створення користувача з наступними властивостями:
// * name — рядок;
// * age — число;
// * followers — число.
// Добав метод getInfo(), який, виводить рядок:
// User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  };
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  };
};

const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

mango.getInfo();

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly.getInfo();
