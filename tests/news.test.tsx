import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import NewsPage from "@/app/news/page";
import NewsArticlePage from "@/app/news/[slug]/page";
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

  it("renders list title, blurb, featured label, and article cards", () => {
    renderNews();
    expect(
      screen.getByRole("heading", { level: 1, name: /Tin tức & ghi chép/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Bài ngắn về product, engineering và cách làm việc/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/^Nổi bật$/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Dolphin Care: Không Chỉ Chatbot AI/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Website giới thiệu xe: Showroom cần gì/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Studio cưới cần website xem váy online/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /5 dấu hiệu website doanh nghiệp đang làm mất khách/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article").length).toBeGreaterThanOrEqual(3);
  });

  it("shows news nav label", () => {
    render(
      <AppProviders>
        <Nav />
      </AppProviders>,
    );
    expect(screen.getAllByRole("link", { name: /^Tin tức$/i }).length).toBeGreaterThanOrEqual(1);
  });

  it("renders article detail with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({ slug: "5-dau-hieu-website-lam-mat-khach" }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /5 dấu hiệu website doanh nghiệp đang làm mất khách/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /Câu hỏi thường gặp/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /Website doanh nghiệp cần cập nhật lại sau bao lâu/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders showroom car article with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({ slug: "website-gioi-thieu-xe-showroom" }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Website giới thiệu xe: Showroom cần gì/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /Website showroom ô tô cần những tính năng gì là thiết yếu nhất/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /danh sách xe và bộ lọc thông minh/i,
      }),
    ).toBeInTheDocument();
  });
});
