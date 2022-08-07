import { render, screen } from "@testing-library/react";
import BestSellers from "../components/BestSellers/BestSellers";
import { MemoryRouter } from "react-router-dom";

describe("BestSellers Component", () => {
  test("should render best sellers div", () => {
    render(<BestSellers />, { wrapper: MemoryRouter });
    const el = screen.getByTestId("test-bestsellers");
    expect(el).toBeInTheDocument();
    expect(el).toMatchSnapshot();
    expect(el).toBeTruthy();
  });
});
