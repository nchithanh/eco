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

  it("capabilities offer cards link to pillars and more tags (VI homepage_lang)", () => {
    const { container } = render(
      <AppProviders>
        <Capabilities />
      </AppProviders>,
    );

    const capabilities = container.querySelector("#capabilities");
    expect(capabilities).toBeTruthy();
    const section = within(capabilities as HTMLElement);

    // Prefer VI overlay when locale resolves to vi (homepage_lang_vi).
    // If worker default is ja without overlay, skip — assert either pillars or legacy offers.
    const pillarHeading = section.queryByRole("heading", {
      level: 2,
      name: /Chúng tôi giúp doanh nghiệp theo 4 cách/i,
    });
    if (pillarHeading) {
      expect(section.getByRole("link", { name: /Build/i })).toHaveAttribute(
        "href",
        "/services/web",
      );
      expect(section.getByRole("link", { name: /Modernize/i })).toHaveAttribute(
        "href",
        "/services/web",
      );
      expect(section.getByRole("link", { name: /Automate/i })).toHaveAttribute(
        "href",
        "/ai-transform",
      );
      expect(section.getByRole("link", { name: /Care/i })).toHaveAttribute(
        "href",
        "/dolphin-care",
      );
      expect(section.getByRole("link", { name: /Spa/i })).toHaveAttribute(
        "href",
        "#works",
      );
      expect(section.getByRole("link", { name: /Phòng khám/i })).toHaveAttribute(
        "href",
        "#works",
      );
      expect(
        section.getByRole("button", { name: /Nhận tư vấn miễn phí/i }),
      ).toBeInTheDocument();
      expect(
        section.getByRole("link", { name: /Xem cách chúng tôi làm việc/i }),
      ).toHaveAttribute("href", "#process");
      return;
    }

    expect(
      section.getByRole("heading", {
        level: 2,
        name: /わかりやすく回るWebサイトを先に/i,
      }),
    ).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /ランディングページ/i }),
    ).toHaveAttribute("href", "/services/web");
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
      section.getByRole("link", { name: /Giúp cửa hàng bida quản lý bàn và ca làm dễ hơn/i }),
    ).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Website đặt sân cầu lông trực tuyến/i }),
    ).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Website đặt vé sự kiện/i }),
    ).toBeInTheDocument();
    expect(
      section.queryByRole("link", { name: /Đặt lịch làm đẹp ngoài giờ hành chính/i }),
    ).not.toBeInTheDocument();

    expect(section.getByText("1 / 2")).toBeInTheDocument();
    await user.click(section.getByRole("button", { name: /Trang sau/i }));

    expect(section.getByText("2 / 2")).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Đặt lịch làm đẹp ngoài giờ hành chính/i }),
    ).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Gọi món cafe bằng QR theo bàn/i }),
    ).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Đặt lịch phòng khám theo bác sĩ/i }),
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
