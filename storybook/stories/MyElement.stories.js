import { html } from "lit-element";
import "../my-element.js";

export default {
  title: "Example/My Element",
  argTypes: {
    title: { control: "string" },
    counter: { control: "number" },
    text: { control: "string" },
  },
};

const Template = ({ title, text, counter = 0 }) => {
  return html`
    <my-element .title=${title} .counter=${counter}>${text}</my-element>
  `;
};

export const MyElement = (args) => Template(args);
MyElement.args = {
  title: "My title",
};

export const NegativeCounter = (args) => Template(args);
NegativeCounter.args = {
  title: "Foo",
  counter: -5,
};

export const SlottedText = (args) => Template(args);
SlottedText.args = {
  title: "My title",
  text: "Some slotted text",
};
