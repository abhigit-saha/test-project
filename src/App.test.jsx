import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Our First Test" }).textContent
    ).toMatch(/our first test/i);
  });
});
