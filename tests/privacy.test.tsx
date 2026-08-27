import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import PrivacyPage from "@/app/privacy/page";
import { AppProviders } from "@/components/AppProviders";

describe("privacy page", () => {
  beforeEach(() => {
    window.localStorage.setItem("kuct-locale", "vi");
  });

  it("renders one h1 and Messenger Fanpage policy", () => {
    render(
      <AppProviders>
        <PrivacyPage />
      </AppProviders>,
    );

    expect(
      screen.getByRole("heading", { level: 1, name: /Quyền riêng tư/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /Facebook Messenger/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Fanpage Dolphin Software \(ID 61592428631532\)/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("contentinfo").querySelector('a[href$="/privacy/"]'),
    ).toBeTruthy();
  });
});
