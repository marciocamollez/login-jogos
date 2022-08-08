import { render, screen } from "@testing-library/react";
import SliderProducts from "../components/SliderProducts/SliderProducts";
import { MemoryRouter } from "react-router-dom";

describe("SliderProducts Component", () => {
  test("should render slider products div", () => {
    render(<SliderProducts />, { wrapper: MemoryRouter });
    const el = screen.getByTestId("test-slider");
    expect(el).toBeInTheDocument();
    expect(el).toMatchSnapshot();
    expect(el).toBeTruthy();
  });
});
