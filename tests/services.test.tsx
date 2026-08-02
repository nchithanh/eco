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
    document.documentElement.setAttribute("data-locale", "vi");
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

  it("capabilities offer cards link to pillars and more tags (VI homepage_lang)", async () => {
    const { container } = render(
      <AppProviders>
        <Capabilities />
      </AppProviders>,
    );

    const capabilities = container.querySelector("#capabilities");
    expect(capabilities).toBeTruthy();
    const section = within(capabilities as HTMLElement);

    expect(
      await section.findByRole("heading", {
        level: 2,
        name: /Website rõ ràng, doanh nghiệp thực sự vận hành được/i,
      }),
    ).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Landing Page/i }),
    ).toHaveAttribute("href", "/services/web");
    expect(
      section.getByRole("link", { name: /Mobile App/i }),
    ).toHaveAttribute("href", "/services/mobile");
    expect(
      section.getByRole("button", { name: /Nhận báo giá/i }),
    ).toBeInTheDocument();
  });

  it("works showcase lists VI homepage_lang projects", async () => {
    const { container } = render(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    const works = container.querySelector("#works");
    expect(works).toBeTruthy();
    const section = within(works as HTMLElement);

    expect(
      await section.findByRole("link", { name: /Ops quản lý bida/i }),
    ).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Website sân cầu lông/i }),
    ).toBeInTheDocument();
    expect(
      section.getByRole("link", { name: /Đặt vé & tối ưu chuyển đổi/i }),
    ).toBeInTheDocument();
    expect(section.getByText("1 / 2")).toBeInTheDocument();
  });

  it("renders web service detail content", () => {
    render(
      <AppProviders>
        <ServiceDetailView slug="web" />
      </AppProviders>,
    );

    expect(
      screen.getByRole("heading", {
        name: /Thiết kế website theo yêu cầu cho doanh nghiệp vừa và nhỏ/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Bạn nhận được gì từ dịch vụ thiết kế web của Dolphin Software/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Thiết kế website theo yêu cầu giá bao nhiêu/i),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /Nhận báo giá miễn phí/i }).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders mobile service detail content", () => {
    render(
      <AppProviders>
        <ServiceDetailView slug="mobile" />
      </AppProviders>,
    );

    expect(
      screen.getByRole("heading", {
        name: /Phát triển ứng dụng mobile/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Bạn nhận được gì khi làm app với Dolphin Software/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Flutter hay React Native — nên chọn cái nào/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/8 đến 14 tuần/i),
    ).toBeInTheDocument();
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
