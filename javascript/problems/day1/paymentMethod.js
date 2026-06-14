export default class PaymentMethod {
  pay(amount) {
    throw new Error("Must implement Pay");
  }
}
