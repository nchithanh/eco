import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("YeGa homepage", () => {
  it("renders hero brand and primary CTA", () => {
    render(<Home />);
    expect(screen.getAllByText("YeGa").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("heading", {
        name: /Xây web & app — từ MVP đến sản phẩm thật/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Nhận báo giá/i }),
    ).toHaveAttribute("href", "#contact");
  });

  it("renders capabilities and process headings", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Năng lực chính/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Quy trình gọn/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Discovery/i)).toBeInTheDocument();
    expect(screen.getByText(/Handover/i)).toBeInTheDocument();
  });
});
