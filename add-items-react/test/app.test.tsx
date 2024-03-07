import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// vitest
// npm i vitest happy-dom -D
//https://testing-library.com/
// npm install --save-dev @testing-library/react
//npm install --save-dev @testing-library/user-event

import App from "../src/App";
describe("<App/>", () => {
  // test("should work", () => {
  //   render(<App />);
  //   screen.debug();
  //   expect(screen.getByText("Prueba tecnica")).toBeDefined();
  // });

  test("should add a new item and remove the item", async () => {
    const user = userEvent.setup();
    render(<App />);
    //buscar el input
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    // buscar el form
    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    const button = form.querySelector("button");
    expect(button).toBeDefined();

    const randomText = crypto.randomUUID();

    await user.type(input, randomText);
    await user.click(button!);

    const list = screen.getByRole("list");
    expect(list).toBeDefined();

    expect(list.childNodes.length).toBe(1);

    const item = screen.getByText(randomText);
    const removeButon = item?.querySelector("button");
    expect(removeButon).toBeDefined();

    await user.click(removeButon!);

    screen.debug();
    const noResults = screen.getByText("No hay elementos en la lista");
    expect(noResults).toBeDefined();
  });
});
