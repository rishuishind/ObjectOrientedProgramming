import BaseText from "./baseText.js";
import BoldDecorator from "./decorator/boldDecorator.js";
import ItalicDecorator from "./decorator/italicDecorator.js";

const text = new BoldDecorator(
  new ItalicDecorator(new BaseText("This is text")),
);
console.log(text.render());
