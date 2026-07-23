import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ServiceDetailView } from "@/components/ServiceDetailView";
import { AppProviders } from "@/components/AppProviders";
import Home from "@/app/page";

describe("service detail pages", () => {
  it("capabilities cards link to service detail routes", () => {
    render(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    expect(
      screen.getByRole("link", { name: /Phát triển website theo yêu cầu/i }),
    ).toHaveAttribute("href", "/services/web");
    expect(
      screen.getByRole("link", { name: /Phát triển mobile app/i }),
    ).toHaveAttribute("href", "/services/mobile");
    expect(
      screen.getByRole("link", { name: /Backend & tích hợp hệ thống/i }),
    ).toHaveAttribute("href", "/services/backend");
    expect(
      screen.getByRole("link", { name: /UI\/UX & bàn giao/i }),
    ).toHaveAttribute("href", "/services/design");
    expect(
      screen.getByRole("link", { name: /Tích hợp dịch vụ bên thứ ba/i }),
    ).toHaveAttribute("href", "/services/integrations");
    expect(
      screen.getByRole("link", { name: /Hệ sinh thái agent cho business/i }),
    ).toHaveAttribute("href", "/services/agents");
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
      screen.getByRole("link", { name: /Nhận báo giá/i }),
    ).toHaveAttribute("href", "/#contact");
  });
});
