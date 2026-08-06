import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import CareersPage from "@/app/careers/page";
import { AppProviders } from "@/components/AppProviders";

function renderCareers() {
  return render(
    <AppProviders>
      <CareersPage />
    </AppProviders>,
  );
}

describe("Dolphin Software careers page", () => {
  beforeEach(() => {
    window.localStorage.setItem("kuct-locale", "vi");
  });
  it("renders freelance hero and open roles including sales", () => {
    renderCareers();
    expect(
      screen.getByRole("heading", { name: /Làm freelance với Dolphin Software/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Frontend Developer \(Next\.js \/ React\)/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Mobile Developer \(Flutter \/ React Native\)/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Backend Developer \(Node\.js \/ API\)/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /UI\/UX Designer/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Sales \/ Business Development/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Marketing \/ Growth/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/^Đã đóng$/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText(/^Freelance$/i).length).toBeGreaterThanOrEqual(5);
    expect(screen.getAllByText(/1\.000 USD/i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByText(/Hoa hồng 40% · không lương cứng/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Ưu tiên · Khẩn cấp/i)).toBeInTheDocument();
  });

  it("Apply on a job selects that role in the form", async () => {
    const user = userEvent.setup();
    renderCareers();
    const applyButtons = screen.getAllByRole("button", { name: /Ứng tuyển/i });
    // First card is priority Sales
    await user.click(applyButtons[0]);
    expect(screen.getByLabelText(/Vị trí/i)).toHaveValue("sales");
  });

  it("switches careers copy to English", async () => {
    const user = userEvent.setup();
    renderCareers();
    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /English/i }));
    expect(
      screen.getByRole("heading", { name: /Freelance with Dolphin Software/i }),
    ).toBeInTheDocument();
  });
});
