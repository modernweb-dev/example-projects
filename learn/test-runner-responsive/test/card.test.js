import { expect, fixture, html } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-helpers';

describe('card', () => {
  before(() => {
    // add css files to page for the test
    const link = document.createElement('link');
    link.href = new URL('../src/styles.css', import.meta.url);
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  });

  beforeEach(async () => {
    await setViewport({ width: 360, height: 640 });
  });

  it('has a green background', async () => {
    const el = await fixture(html`<div class="card"></div>`);
    expect(getComputedStyle(el).backgroundColor).to.equal('rgb(0, 255, 0)');
  });

  describe('desktop', () => {
    beforeEach(async () => {
      await setViewport({ width: 1200, height: 1000 });
    });

    it('has a red background', async () => {
      const el = await fixture(html`<div class="card"></div>`);
      expect(getComputedStyle(el).backgroundColor).to.equal('rgb(255, 0, 0)');
    });
  });
});
