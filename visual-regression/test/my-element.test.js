import { html, fixture, expect } from "@open-wc/testing";
import { visualDiff } from "@web/test-runner-visual-regression";

import "../my-element.js";

describe("MyElement Visual diffing", () => {
  it('no title', async () => {
    const el = await fixture(html`<my-element></my-element>`);
    await visualDiff(el, 'no title');
  });
});
