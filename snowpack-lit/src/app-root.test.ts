import { expect } from '@esm-bundle/chai';

import '../src/app-root';
import type { AppRoot } from '../src/app-root';

describe('app-root', () => {
  it('contains the expected title', async () => {
    const appRoot = document.createElement('app-root') as AppRoot;
    document.body.appendChild(appRoot);
    await appRoot.updateComplete;
    expect(appRoot.shadowRoot!.textContent).to.include('LitElement + Snowpack');
  });
});
