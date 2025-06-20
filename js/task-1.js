// Завдання 1
console.log("Завдання 1");

// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email.
// В prototype функції-конструктора добав метод getInfo(),
// який виводить в консоль значення полів login і email об'єкта який його викликав

const Account = function ({ login, email }) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

console.log(Account.prototype.getInfo);

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo();

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo();
