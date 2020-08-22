import { render, JSX } from 'preact';

export function fixture(jsx: JSX.Element) {
  const wrapper = document.createElement('div');
  render(jsx, wrapper);
  return {
    element: wrapper.firstElementChild!,
    restoreFixture: () => wrapper.remove(),
  };
}
