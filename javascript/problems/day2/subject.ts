import User from "./user";

export default interface Subject {
  subscribe(user: User): void;
  unsubscribe(user: User): void;
  notify(): void;
}
