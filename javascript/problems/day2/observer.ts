import Channel from "./channel";

export default interface Observer {
  update(channel: Channel): void;
}
