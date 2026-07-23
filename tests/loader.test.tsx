import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AgentLoader } from "@/components/AgentLoader";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";

function renderLoader(minDurationMs = 3000) {
  return render(
    <LocaleProvider>
      <AgentLoader disabled={false} minDurationMs={minDurationMs} />
    </LocaleProvider>,
  );
}

describe("AgentLoader", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({
        matches: false,
        media: "",
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    );
  });

  afterEach(() => {
    vi.useRealTimers();
    document.body.style.overflow = "";
    document.documentElement.classList.remove("kuct-loading");
  });

  it("shows agent constellation and status", () => {
    vi.useFakeTimers({ toFake: ["setTimeout", "requestAnimationFrame"] });
    renderLoader(3000);

    expect(screen.getByRole("status", { name: /Đang khởi động hệ thống agent/i })).toBeInTheDocument();
    expect(screen.getByText(/Đang khởi động agent/i)).toBeInTheDocument();
    expect(screen.getByText("Scout")).toBeInTheDocument();
    expect(screen.getByText("Plan")).toBeInTheDocument();
    expect(screen.getByText("Build")).toBeInTheDocument();
    expect(screen.getByText("Ship")).toBeInTheDocument();
  });

  it("stays for min duration then unmounts", async () => {
    vi.useFakeTimers({ toFake: ["setTimeout", "requestAnimationFrame", "performance"] });
    renderLoader(3000);

    expect(screen.getByRole("status")).toBeInTheDocument();

    await act(async () => {
      await vi.advanceTimersByTimeAsync(2990);
    });
    expect(screen.getByRole("status")).toBeInTheDocument();

    await act(async () => {
      await vi.advanceTimersByTimeAsync(50);
    });
    // exit animation still mounted briefly
    expect(screen.getByRole("status")).toBeInTheDocument();

    await act(async () => {
      await vi.advanceTimersByTimeAsync(500);
    });
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
