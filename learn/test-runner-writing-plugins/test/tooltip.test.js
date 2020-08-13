import { expect, fixture, html } from "@open-wc/testing";
import { createPopper } from "@popperjs/core";

it("can use popper", async () => {
  const wrapper = await fixture(html`
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
  `);

  const button = wrapper.querySelector("#button");
  const tooltip = wrapper.querySelector("#tooltip");

  createPopper(button, tooltip, {
    placement: "right",
  });
});
