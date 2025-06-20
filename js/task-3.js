// Завдання 3
console.log("Завдання 3");

// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
// При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.
// Додай методи класу:
// * getItems() — повертає масив поточних товарів;
// * addItem(item) — отримує новий товар і додає його до поточних;
// * removeItem(item) — отримує товар і, якщо він є, видаляє його з поточних

class Storage {
  constructor(items) {
    this.items = items;
  };
  getItems() {
    return this.items;
  };
  addItem(item) {
    return this.items.push(item);
  };
  removeItem(item) {
    return this.items.splice(this.items.indexOf(item), this.items.indexOf(item));
  };
};

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items);

storage.addItem("Дроїд");
console.table(storage.items);

storage.removeItem("Пролонгер");
console.table(storage.items);
