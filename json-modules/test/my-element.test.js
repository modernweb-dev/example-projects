import { html, fixture, expect } from '@open-wc/testing';

import '../my-element.js';

describe('MyElement', () => {
  it('renders hello world', async () => {
    const el = await fixture(html`
      <my-element></my-element>
    `);

    expect(el.shadowRoot.textContent).to.include('Hello world');
  });


  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <my-element></my-element>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
