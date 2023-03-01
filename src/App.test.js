import React from "react";

import { act } from '@testing-library/react';
import { createRoot } from 'react-dom/client';

import App from "./App";


describe('Module 01',() =>{

    let container = null;
    let root = null;

    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement("div");
      document.body.appendChild(container);
      root = createRoot(container)
    });

    afterEach(() => {
      // cleanup on exiting
      //unmountComponentAtNode(container);
      root.unmount();
    });

    it("renders with or without a name", () => {
      act(() => {
        root.render(<App />);
      });
      expect(container.textContent).toContain("fromagerie ");

    });
});