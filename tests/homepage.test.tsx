import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { Nav } from "@/components/Nav";
import { AppProviders } from "@/components/AppProviders";

function renderHome() {
  return render(
    <AppProviders>
      <Home />
    </AppProviders>,
  );
}

describe("KU THANH homepage", () => {
  it("renders hero brand and primary CTA", () => {
    renderHome();
    expect(screen.getAllByLabelText(/KU THANH/i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("heading", {
        name: /Giải pháp web & app tổng thể/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Nhận báo giá/i }),
    ).toHaveAttribute("href", "#contact");
  });

  it("renders capabilities and process headings", () => {
    renderHome();
    expect(
      screen.getByRole("heading", { level: 2, name: /^Giải pháp tổng thể$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Quy trình bàn giao 5 bước/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Lắng nghe & Khảo sát/i)).toBeInTheDocument();
    expect(screen.getByText(/Bàn giao & Đồng hành/i)).toBeInTheDocument();
  });

  it("renders stack, why, secondary services and contact form", () => {
    renderHome();
    expect(
      screen.getByRole("heading", {
        name: /Năng lực kỹ thuật với.*công nghệ hiện đại/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Đồng hành dài hạn, không chỉ bàn giao code/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Thanh NC/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Thêm từ\s*KU\s*THANH/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Kiến trúc & hỗ trợ hệ thống/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Cộng đồng đầu tư CK/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Sẵn sàng khởi động dự án/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Gửi yêu cầu/i }),
    ).toBeInTheDocument();
  });

  it("reveals the contact link from the mobile menu", async () => {
    const user = userEvent.setup();
    render(
      <AppProviders>
        <Nav />
      </AppProviders>,
    );

    await user.click(screen.getByRole("button", { name: /Mở menu/i }));

    expect(
      within(
        screen.getByRole("navigation", { name: /Điều hướng di động/i }),
      ).getByRole("link", { name: /Liên hệ/i }),
    ).toHaveAttribute("href", "#contact");
  });

  it("switches language to Japanese", async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /日本語/i }));

    expect(
      screen.getByRole("heading", {
        name: /Web & Appのトータルソリューション/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /見積もりを依頼/i }),
    ).toBeInTheDocument();
  });

  it("switches language to English", async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /English/i }));

    expect(
      screen.getByRole("heading", {
        name: /End-to-end web & app solutions/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Get a quote/i }),
    ).toBeInTheDocument();
  });

  it("switches language to German", async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /Deutsch/i }));

    expect(
      screen.getByRole("heading", {
        name: /Web- & App-Lösungen aus einer Hand/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Angebot anfordern/i }),
    ).toBeInTheDocument();
  });
});
