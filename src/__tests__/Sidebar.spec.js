import { render, screen } from "@testing-library/react";
import Sidebar from "../components/Sidebar/Sidebar";
import { MemoryRouter } from "react-router-dom";

describe("Sidebar Component", () => {
  test("should render sidebar menu", () => {
    render(<Sidebar />, { wrapper: MemoryRouter });
    const el = screen.getByTestId("test-sidemenu");
    expect(el).toBeInTheDocument();
    expect(el).toMatchSnapshot();
    expect(el).toBeTruthy();
  });
});
