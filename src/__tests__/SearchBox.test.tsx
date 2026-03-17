import { render, screen, fireEvent } from "@testing-library/react";
import SearchBox from "../../app/components/SearchBox";

describe("SearchBox component", () => {
  it("renders input with initial value", () => {
    render(<SearchBox value="初期値" onChange={() => {}} />);
    const input = screen.getByPlaceholderText("タイトルで検索") as HTMLInputElement;
    expect(input.value).toBe("初期値");
  });

  it("calls onChange when user types", () => {
    const handleChange = jest.fn();
    render(<SearchBox value="" onChange={handleChange} />);

    const input = screen.getByPlaceholderText("タイトルで検索");
    fireEvent.change(input, { target: { value: "Next.js" } });

    expect(handleChange).toHaveBeenCalledWith("Next.js");
  });

  it("trims value on blur", () => {
    const handleChange = jest.fn();
    render(<SearchBox value="  sample  " onChange={handleChange} />);

    const input = screen.getByPlaceholderText("タイトルで検索");
    fireEvent.blur(input);

    // onBlur時にtrim()された値が渡される
    expect(handleChange).toHaveBeenCalledWith("sample");
  });
});
