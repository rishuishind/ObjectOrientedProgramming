import Text from "../text.js";

export default class BaseDecorator extends Text {
  constructor(textComponent) {
    super();
    this.textComponent = textComponent;
  }
}
