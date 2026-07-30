import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import NewsPage from "@/app/news/page";
import { AppProviders } from "@/components/AppProviders";
import { Nav } from "@/components/Nav";

function renderNews() {
  return render(
    <AppProviders>
      <NewsPage />
    </AppProviders>,
  );
}

describe("Dolphin Software news page", () => {
  beforeEach(() => {
    window.localStorage.setItem("kuct-locale", "vi");
  });

  it("renders list title, blurb, and at least one article", () => {
    renderNews();
    expect(
      screen.getByRole("heading", { level: 1, name: /Tin tức & ghi chép/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Bài ngắn về product, engineering và cách làm việc/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Từ MVP sang V1 mà không viết lại toàn bộ/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Workshop khám phá trước khi code giúp giữ ngân sách/i,
      }),
    ).toBeInTheDocument();
  });

  it("shows news nav label", () => {
    render(
      <AppProviders>
        <Nav />
      </AppProviders>,
    );
    expect(screen.getAllByRole("link", { name: /^Tin tức$/i }).length).toBeGreaterThanOrEqual(1);
  });
});
