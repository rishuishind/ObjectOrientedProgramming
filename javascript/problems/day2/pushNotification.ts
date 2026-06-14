import NotificationStratergy from "./notificationStratergy";

export default class PushNotification implements NotificationStratergy {
  send(email: string, phone: string, msg: string): void {
    console.log(`User with email: ${email}: \n ${msg}`);
  }
}
