import Channel from "./channel";
import NotificationStratergy from "./notificationStratergy";
import Observer from "./observer";

export default class User implements Observer {
  #email: string;
  #phone: string;
  #notificationStratergy: NotificationStratergy;
  constructor(email: string, phone: string, stratergy: NotificationStratergy) {
    this.#email = email;
    this.#phone = phone;
    this.#notificationStratergy = stratergy;
  }

  update(channel: Channel): void {
    this.#notificationStratergy.send(
      this.#email,
      this.#phone,
      `${channel.channelName} has posted a new video`,
    );
  }
}
