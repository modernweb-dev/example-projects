import { createPopper } from "@popperjs/core";

it("can use popper", async () => {
  const fixture = document.createElement('div');
  fixture.innerHTML = `
    <div>
      <style>
        #tooltip {
          background-color: #333;
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 13px;
        }
      </style>

      <button id="button" aria-describedby="tooltip">I'm a button</button>
      <div id="tooltip" role="tooltip">I'm a tooltip</div>
    </div>
  `;
  document.body.appendChild(fixture);

  const button = fixture.querySelector("#button");
  const tooltip = fixture.querySelector("#tooltip");

  createPopper(button, tooltip, {
    placement: "right",
  });
  fixture.remove();
});
