import { expect } from "@esm-bundle/chai";
import React from 'react';
import htm from "htm";
import App from "../src/App";
import { fixture } from "./test-helpers";

let element;
let restoreFixture;

const html = htm.bind(React.createElement);

beforeEach(() => {
  ({ element, restoreFixture } = fixture(html` <${App} /> `));
});

afterEach(() => {
  restoreFixture();
});

it("renders a hello world message", () => {
  expect(element.textContent).to.include("Hello, World!");
});
