import Button from "@/components/button";
import { fireEvent, render, screen } from "@testing-library/react";

test("버튼이 있는지 확인", () => {
  render(<Button />);

  const button = screen.getByText("버튼");
  expect(button).toBeInTheDocument();
});
