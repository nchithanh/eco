import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ServiceDetailView } from "@/components/ServiceDetailView";
import { Capabilities } from "@/components/Capabilities";
import { CustomAgentContent } from "@/components/CustomAgentContent";
import { AiTransformContent } from "@/components/AiTransformContent";
import { AppProviders } from "@/components/AppProviders";
import Home from "@/app/page";

describe("service detail pages", () => {
  beforeEach(() => {
    window.localStorage.setItem("kuct-locale", "vi");
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockImplementation((query: string) => ({
        matches: String(query).includes("640px") || String(query).includes("64rem"),
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    );
  });

  it("capabilities offer cards link to web services and more tags", () => {
    const { container } = render(
      <AppProviders>
        <Capabilities />
      </AppProviders>,
    );

    const capabilities = container.querySelector("#capabilities");
    expect(capabilities).toBeTruthy();
    const section = within(capabilities as HTMLElement);

    expect(
      section.getByRole("heading", {
        level: 2,
        name: /Làm website cho anh chị rõ ràng, dễ chạy/i,
      }),
    ).toBeInTheDocument();
    expect(section.getByRole("link", { name: /Landing Page/i })).toHaveAttribute(
      "href",
      "/services/web",
    );
    expect(
      section.getByRole("link", { name: /Website doanh nghiệp/i }),
    ).toHaveAttribute("href", "/services/web");
    expect(
      section.getByRole("link", { name: /Website bán hàng/i }),
    ).toHaveAttribute("href", "/services/web");
    expect(section.getByRole("link", { name: /Web app/i })).toHaveAttribute(
      "href",
      "/services/web",
    );
    expect(section.getByRole("link", { name: /Mobile app/i })).toHaveAttribute(
      "href",
      "/services/mobile",
    );
    expect(section.getByRole("link", { name: /Backend/i })).toHaveAttribute(
      "href",
      "/services/backend",
    );
    expect(section.getByRole("link", { name: /UI\/UX/i })).toHaveAttribute(
      "href",
      "/services/design",
    );
    expect(
      section.getByRole("link", { name: /Tích hợp thanh toán/i }),
    ).toHaveAttribute("href", "/services/integrations");
    expect(
      section.getByRole("button", { name: /Nhận báo giá/i }),
    ).toBeInTheDocument();
    expect(section.getByRole("link", { name: /Xem gói giá/i })).toHaveAttribute(
      "href",
      "#popular-services",
    );
  });

  it("works showcase paginates like capabilities", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    const works = container.querySelector("#works");
    expect(works).toBeTruthy();
    const section = within(works as HTMLElement);

    expect(
      section.getByRole("link", { name: /Quản lý cửa hàng bida/i }),
    ).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Website sân cầu lông/i }),
    ).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Booking vé/i }),
    ).toBeInTheDocument();
    expect(
      section.queryByRole("link", { name: /Booking làm đẹp/i }),
    ).not.toBeInTheDocument();

    expect(section.getByText("1 / 2")).toBeInTheDocument();
    await user.click(section.getByRole("button", { name: /Trang sau/i }));

    expect(section.getByText("2 / 2")).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Booking làm đẹp/i }),
    ).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Cafe đặt món QR/i }),
    ).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Đặt lịch phòng khám/i }),
    ).toBeInTheDocument();
  });

  it("renders web service detail content", () => {
    render(
      <AppProviders>
        <ServiceDetailView slug="web" />
      </AppProviders>,
    );

    expect(
      screen.getByRole("heading", {
        name: /Thiết kế & làm website theo yêu cầu/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Bạn nhận được gì/i)).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /Nhận báo giá/i }).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders custom-agent service detail content", () => {
    render(
      <AppProviders>
        <CustomAgentContent />
      </AppProviders>,
    );

    expect(
      screen.getByRole("heading", {
        name: /Đặt riêng agent gánh đúng/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Không phải chatbot bán sẵn trả lời cho có/i),
    ).toBeInTheDocument();
  });

  it("renders ai-transform landing content", () => {
    render(
      <AppProviders>
        <AiTransformContent />
      </AppProviders>,
    );

    expect(
      screen.getByRole("heading", {
        name: /Gắn AI vào lõi vận hành/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Xem AI Agent theo yêu cầu/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/custom-agent\/?$/));
  });
});
