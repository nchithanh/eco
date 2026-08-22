import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ServiceDetailView } from "@/components/ServiceDetailView";
import { Capabilities } from "@/components/Capabilities";
import { AiTransformContent } from "@/components/AiTransformContent";
import { AgentDolphinPage } from "@/components/AgentDolphinContent";
import { DolphinOpsPage } from "@/components/DolphinOpsContent";
import { AboutContent } from "@/components/AboutContent";
import { CareersContent } from "@/components/CareersContent";
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

  it("renders web service detail content", async () => {
    const { container } = render(
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
    expect(container.querySelector("#service-hero video")).toBeNull();
    expect(
      container.querySelector("#service-hero .kuct-site-mock__chrome"),
    ).toBeTruthy();
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

  it("renders software service detail content", () => {
    render(
      <AppProviders>
        <ServiceDetailView slug="software" />
      </AppProviders>,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Phát triển phần mềm theo yêu cầu/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Dolphin Software có thể xây dựng những gì/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Dolphin Software nhận phát triển những loại phần mềm nào/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders dolphin-care landing content", () => {
    render(
      <AppProviders>
        <AgentDolphinPage />
      </AppProviders>,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /AI chăm sóc khách hàng trên/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Dolphin Care có hỗ trợ tích hợp Zalo không/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Chi phí triển khai Dolphin Care như thế nào/i),
    ).toBeInTheDocument();
  });

  it("renders dolphin-ops landing content and nav link", () => {
    render(
      <AppProviders>
        <DolphinOpsPage />
      </AppProviders>,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /AI vận hành doanh nghiệp/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /AI không thay giao diện/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Admin chỉnh form và báo cáo bằng chat/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Đổi form hay báo cáo, anh chị có phải chờ bộ phận software không/i,
      ),
    ).toBeInTheDocument();
    const opsLinks = screen.getAllByRole("link", { name: /^Dolphin Ops$/i });
    expect(opsLinks.length).toBeGreaterThanOrEqual(1);
    expect(opsLinks[0]).toHaveAttribute(
      "href",
      expect.stringMatching(/\/dolphin-ops\/?$/),
    );
  });

  it("renders about page VI SEO content", () => {
    render(
      <AppProviders>
        <AboutContent />
      </AppProviders>,
    );

    expect(
      screen.getByRole("heading", {
        name: /Dolphin Software tiếp cận dự án như thế nào/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Dolphin Software là công ty gì/i),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/Nguyễn Chí Thành/i).length,
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText(/Hồ Quốc Nghĩa/i).length,
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText(/Phạm Tấn Hoàng/i).length,
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/^Co-founder$/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Business Development · Japan Market/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /01 · Web & App/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/services\/web\/?/));
  });

  it("renders careers page VI SEO content", () => {
    render(
      <AppProviders>
        <CareersContent />
      </AppProviders>,
    );

    expect(
      screen.getByRole("heading", {
        name: /Mô hình freelance tại Dolphin Software là gì/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Dolphin Software tuyển freelance hay nhân viên chính thức/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Đã đóng tuyển/i }),
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
        level: 1,
        name: /Chuyển Đổi AI cho Doanh Nghiệp/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Xem Dolphin Care/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/dolphin-care\/?$/));
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Dolphin Xây Gì Trong Lộ Trình Chuyển Đổi AI/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /^Sales$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Dolphin Builds With AI/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /Overview Agent/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Chi phí triển khai AI transformation là bao nhiêu/i,
      }),
    ).toBeInTheDocument();
  });
});
