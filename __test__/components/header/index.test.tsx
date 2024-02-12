import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderComponent from "@/components/header";

describe("Header Component", () => {
  it("renders a heading", () => {
    render(<HeaderComponent />);

    const header = screen.getByRole("heading");
    const headerText = "Header";

    expect(header).toHaveTextContent(headerText);
  });
  it("renders a link", () => {
    render(<HeaderComponent />);

    const link = screen.getByRole("link");
    const linkText = "About";

    expect(link).toHaveTextContent(linkText);
    expect(link).toHaveAttribute("href", "/about");
  });
});
