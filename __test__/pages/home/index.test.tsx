import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePages from "@/app/home/page";

describe("Home Pages", () => {
  it("should render heading", () => {
    render(<HomePages />);

    const heading = screen.getByRole("heading");
    const headingText = "Home Page";

    expect(heading).toHaveTextContent(headingText);
  });
});
