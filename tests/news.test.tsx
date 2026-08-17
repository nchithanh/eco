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
        name: /Website shop độ xe — Instagram chưa đủ để khách đặt lịch/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Thiết kế website giá bao nhiêu\? Bảng giá website 2026/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /5 agent làm xuyên đêm — sáng ra việc nào đã xong thật/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Copy Prompt AI Trên Mạng: Rủi Ro Cho Doanh Nghiệp/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Chuyển Đổi AI Doanh Nghiệp: Vì Sao SMB Việt Nam Mua AI Nhưng Vẫn Làm Tay/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Dolphin Care: Khi AI biến mỗi cuộc trò chuyện/i,
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

  it("renders copy-prompt risk article with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({
        slug: "rui-ro-copy-prompt-chatgpt-doanh-nghiep",
      }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Copy Prompt AI Trên Mạng: Rủi Ro Cho Doanh Nghiệp/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Checklist 6 bước kiểm trước khi cài AI tool/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /Copy prompt AI trên Facebook có sao không/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders racing-shop website article with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({
        slug: "website-shop-do-xe-instagram-chua-du",
      }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Website shop độ xe — Instagram chưa đủ để khách đặt lịch/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Website shop độ xe cần gì — và đừng làm thành showroom/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /Shop độ xe đã có Instagram mạnh, có cần làm website không/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /ba mục Dịch vụ, Trước–sau và Đặt lịch/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders website pricing 2026 article with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({
        slug: "thiet-ke-website-gia-bao-nhieu-bang-gia-2026",
      }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Thiết kế website giá bao nhiêu\? Bảng giá website 2026/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Bảng giá website 2026 — 4 gói theo phạm vi/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /Thiết kế website giá bao nhiêu\?/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /bốn gói giá website 2026/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders five-agents overnight article with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({
        slug: "5-agent-xuyen-dem-viec-chua-xong",
      }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /5 agent làm xuyên đêm — sáng ra việc nào đã xong thật/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Checklist bàn giao website trước khi tuyên bố/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /Website làm bằng AI agent có dùng được cho việc thật không/i,
      }),
    ).toBeInTheDocument();
  });
});
