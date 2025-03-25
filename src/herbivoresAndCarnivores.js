'use strict';

class Animal {
  static #all = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.#all.push(this);
  }

  static get alive() {
    return this.#all;
  }

  static remove(animal) {
    const index = this.#all.findIndex((a) => a === animal);

    if (index > -1) {
      Animal.#all.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden !== true) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.remove(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
