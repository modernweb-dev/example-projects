import React from 'react';
import { expect } from '@esm-bundle/chai';
import App from '../src/App';
import { fixture } from './test-helpers';

let element: Element;
let restoreFixture: () => void;

beforeEach(() => {
  ({ element, restoreFixture } = fixture(<App />));
});

afterEach(() => {
  restoreFixture();
});

it('renders a hello world message', () => {
  expect(element!.textContent).to.include('Hello, World!');
});
