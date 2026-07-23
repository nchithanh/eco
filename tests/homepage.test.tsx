import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { Nav } from "@/components/Nav";

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

  it("renders secondary services and contact form", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Thêm từ YeGa/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Kiến trúc & hỗ trợ hệ thống/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Cộng đồng đầu tư CK/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Bắt đầu dự án với YeGa/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Gửi yêu cầu/i }),
    ).toBeInTheDocument();
  });

  it("reveals the contact link from the mobile menu", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    await user.click(screen.getByRole("button", { name: /Mở menu/i }));

    expect(
      within(
        screen.getByRole("navigation", { name: /Điều hướng di động/i }),
      ).getByRole("link", { name: /Liên hệ/i }),
    ).toHaveAttribute("href", "#contact");
  });
});
