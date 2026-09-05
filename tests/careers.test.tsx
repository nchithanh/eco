import { render, screen, within } from "@testing-library/react";
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
        name: /QA \/ Tester \(Middle\+\) — 3 slots/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Fullstack Developer \(Junior \/ Middle\) — 2 slots/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Mobile Developer \(Flutter \/ React Native\) — 1 slot/i,
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
      screen.getByRole("heading", { name: /Partner Automation Test/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Business Development Partner/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Marketing \/ Growth/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/^Đã đóng$/i).length).toBeGreaterThanOrEqual(6);
    expect(screen.getAllByText(/^Freelance$/i).length).toBeGreaterThanOrEqual(5);
    expect(
      screen.getAllByText(/Thù lao linh hoạt · thỏa thuận theo giờ \/ deliverable/i)
        .length,
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByText(/Hoa hồng 30% · không lương cứng/i),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/^Ưu tiên$/i).length).toBeGreaterThanOrEqual(4);
  });

  it("opens sales detail popup then apply selects role in the form", async () => {
    const user = userEvent.setup();
    renderCareers();
    await user.click(
      screen.getByRole("heading", { name: /Business Development Partner/i }),
    );
    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).getByRole("heading", {
        name: /Vai trò này làm gì\?/i,
      }),
    ).toBeInTheDocument();
    await user.click(
      within(dialog).getByRole("button", { name: /Ứng tuyển/i }),
    );
    expect(screen.getByLabelText(/Vị trí/i)).toHaveValue("sales");
  });

  it("switches careers copy to English", async () => {
    const user = userEvent.setup();
    renderCareers();
    const languageButtons = screen.getAllByRole("button", {
      name: /^Language$/i,
    });
    await user.click(languageButtons[0]!);
    await user.click(screen.getByRole("button", { name: /English/i }));
    expect(
      screen.getByRole("heading", { name: /Freelance with Dolphin Software/i }),
    ).toBeInTheDocument();
  });
});
