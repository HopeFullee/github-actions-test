import { Counter } from "@/components/counter";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";

describe("Counter 컴포넌트 테스트", () => {
  test("increment 버튼 눌렀을 때 Count가 증가 하는지", () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(incrementButton);

    const count = screen.getByRole("counter");

    expect(count).toHaveTextContent("2");
  });
});
