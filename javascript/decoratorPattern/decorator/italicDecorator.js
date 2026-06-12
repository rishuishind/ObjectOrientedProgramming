import BaseDecorator from "./baseDecorator.js";

export default class ItalicDecorator extends BaseDecorator {
  constructor(textComponent) {
    super(textComponent);
  }

  render() {
    return `<I>${this.textComponent.render()}</I>`;
  }
}
