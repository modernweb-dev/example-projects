import React from 'react';
import ReactDOM from 'react-dom';

export function fixture(jsx: JSX.Element) {
  const wrapper = document.createElement('div');
  ReactDOM.render(jsx, wrapper);
  return {
    element: wrapper.firstElementChild!,
    restoreFixture: () => wrapper.remove(),
  };
}
