import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import { MemoryRouter } from "react-router-dom";

describe("Sidebar Component", () => {
  test("should render header div", () => {
    render(<Header />, { wrapper: MemoryRouter });
    const el = screen.getByTestId("test-header");
    expect(el).toBeInTheDocument();
    expect(el).toMatchSnapshot();
    expect(el).toBeTruthy();
  });
});
