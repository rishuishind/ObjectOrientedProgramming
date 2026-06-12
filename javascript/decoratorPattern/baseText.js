import Text from "./text.js";

export default class BaseText extends Text {
  constructor(text) {
    super();
    this.text = text;
  }

  render() {
    return this.text;
  }
}
