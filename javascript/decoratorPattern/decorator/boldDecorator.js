import BaseDecorator from "./baseDecorator.js";

export default class BoldDecorator extends BaseDecorator {
  constructor(textComponent) {
    super(textComponent);
  }
  render() {
    return `<B>${this.textComponent.render()}</B>`;
  }
}
