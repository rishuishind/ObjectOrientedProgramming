import Subject from "./subject";
import User from "./user";

export default class Channel implements Subject {
  #subscribers: User[] = [];
  channelName: string;

  constructor(name: string) {
    this.channelName = name;
  }

  subscribe(user: User): void {
    const idx = this.#subscribers.findIndex((subsciber) => subsciber == user);
    if (idx == -1) {
      this.#subscribers.push(user);
    }
  }
  unsubscribe(user: User): void {
    const idx = this.#subscribers.findIndex((subsciber) => subsciber == user);
    if (idx !== -1) {
      this.#subscribers.splice(idx, 1);
    }
  }
  notify(): void {
    for (let sub of this.#subscribers) {
      sub.update(this);
    }
  }
  addVideo(): void {
    console.log("Adding Video...");
    this.notify();
  }
}
