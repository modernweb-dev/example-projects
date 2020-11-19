import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

export default function App() {
    return html`
      <div>
        <h1>Hello, World!</h1>
      </div>
    `;
}
