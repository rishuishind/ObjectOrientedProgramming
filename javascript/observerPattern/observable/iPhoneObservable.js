import Subject from "./subject.js";

export default class IphoneObservable extends Subject {
  #observers = [];
  #iphoneQuantity = 0;
  add(observer) {
    this.#observers.push(observer);
  }
  remove(observer) {
    const idx = this.#observers.indexOf(observer);
    if (idx > 0) {
      this.#observers.splice(idx, 1);
    }
  }
  #notify() {
    for (let observer of this.#observers) {
      observer.update();
    }
  }
  setInventory(quantity) {
    if (this.#iphoneQuantity == 0) {
      this.#iphoneQuantity = quantity;
      this.#notify();
    } else {
      this.#iphoneQuantity += quantity;
    }
  }

  getInventory() {
    return this.#iphoneQuantity;
  }
}
