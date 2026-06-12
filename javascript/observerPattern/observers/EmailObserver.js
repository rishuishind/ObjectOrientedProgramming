import Observer from "./observer.js";

export default class EmailObserver extends Observer {
  constructor(email, observable) {
    super();

    this.email = email;
    this.observable = observable;
  }
  update() {
    this.#sendEmail(this.email, "You have been notified");
  }
  #sendEmail(email, msg) {
    console.log(
      `Email sent to ${email} with message: ${msg} \n Current Iphone quantity is ${this.observable.getInventory()}`,
    );
  }
}
