import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ServiceDetailView } from "@/components/ServiceDetailView";
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

  it("capabilities cards link to service detail routes", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    const capabilities = container.querySelector("#capabilities");
    expect(capabilities).toBeTruthy();
    const section = within(capabilities as HTMLElement);

    expect(
      section.getByRole("link", { name: /Phát triển website theo yêu cầu/i }),
    ).toHaveAttribute("href", "/services/web");
    expect(
      section.getByRole("link", { name: /Phát triển mobile app/i }),
    ).toHaveAttribute("href", "/services/mobile");
    expect(
      section.getByRole("link", { name: /Backend & tích hợp hệ thống/i }),
    ).toHaveAttribute("href", "/services/backend");

    await user.click(section.getByRole("button", { name: /Trang sau/i }));

    expect(
      section.getByRole("link", { name: /UI\/UX & bàn giao/i }),
    ).toHaveAttribute("href", "/services/design");
    expect(
      section.getByRole("link", { name: /Tích hợp dịch vụ bên thứ ba/i }),
    ).toHaveAttribute("href", "/services/integrations");
    expect(
      section.getByRole("link", { name: /Hệ sinh thái agent cho business/i }),
    ).toHaveAttribute("href", "/services/agents");
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
        name: /Phát triển website theo yêu cầu/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Bạn nhận được gì/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Nhận báo giá/i }),
    ).toBeInTheDocument();
  });
});
