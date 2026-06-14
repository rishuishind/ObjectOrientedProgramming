export default class Checkout {
  #paymentMethod;
  constructor(paymentMethod) {
    this.#paymentMethod = paymentMethod;
  }
  processPayment(amount) {
    return this.#paymentMethod.pay(amount);
  }

  set paymentMethod(paymentMethod) {
    this.#paymentMethod = paymentMethod;
  }
}
