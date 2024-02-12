import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutLayout from "@/app/about/layout";
import Link from "next/link";

describe("Layout Pages", () => {
  it("should render layout", () => {
    const mockUpPrice = <div>Price</div>;
    render(
      <AboutLayout price={mockUpPrice}>
        <div>Children</div>
      </AboutLayout>
    );

    const navElement = screen.getByRole("navigation");
    expect(navElement).toHaveClass("fixed left-0 top-20 z-10 h-screen w-60");

    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(5);

    expect(listItems[0]).toHaveTextContent("Home");
    expect(listItems[1]).toHaveTextContent("About");
    expect(listItems[2]).toHaveTextContent("Profile");
    expect(listItems[3]).toHaveTextContent("Login");
    expect(listItems[4]).toHaveTextContent("Chart");
  });
});
