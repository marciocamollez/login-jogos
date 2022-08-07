import { render, screen } from "@testing-library/react";
import Sidebar from "../components/Sidebar/Sidebar";
import { MemoryRouter } from "react-router-dom";

describe("Sidebar Component", () => {
  test("should render header div", () => {
    render(<Sidebar />, { wrapper: MemoryRouter });
    const el = screen.getByTestId("test-header");
    expect(el).toBeInTheDocument();
    expect(el).toMatchSnapshot();
    expect(el).toBeTruthy();
  });
});
