import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import RandomNumberGenerator from "./RandomNumberGenerator";

describe("<RandomNumberGenerator />", () => {
  test("renders random number", () => {
    render(<RandomNumberGenerator />);
    expect(screen.getByText(/random number/i)).toBeInTheDocument();
  });

  test("updtes random numcer every 3 seconds", async () => {
    await screen.findByText(/random number:\d+/i);
    const initialRandomNumberText = screen.getByText(/random number:\d+/i);

    await new Promise((res) => setTimeout(res, 3000));

    const updatedRandomNumberText =
      screen.getByText(/random number: \d+/i).textContent;
    expect(updatedRandomNumberText).not.toEqual(initialRandomNumberText);
  });
});
