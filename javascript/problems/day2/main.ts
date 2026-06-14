import Channel from "./channel";
import PushNotification from "./pushNotification";
import User from "./user";

const codeRishu = new Channel("Code With Rishu");
const user = new User("abc@example.com", "1234567890", new PushNotification());
codeRishu.subscribe(user);
codeRishu.addVideo();
