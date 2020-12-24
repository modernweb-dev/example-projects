import { html, LitElement } from "lit-element";
import data from "./data.json";

export class MyElement extends LitElement {
  render() {
    return html` <p>${data.message}</p> `;
  }
}
