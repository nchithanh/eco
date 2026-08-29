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
        name: /Bạn đang điều hành doanh nghiệp hay đang làm tổng đài/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Trung tâm nhỏ, ít người: càng nên có CRM/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Mai GV nghỉ — phải nhắn từng nhóm Zalo/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /SaaS là gì\? Giải thích thẳng cho chủ doanh nghiệp/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /10 lỗi khiến website có traffic nhưng không ra khách hàng/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Website doanh nghiệp cần có những gì\? Checklist đầy đủ 2026/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Website hay Facebook: Doanh nghiệp nhỏ nên đầu tư vào đâu/i,
      }),
    ).toBeInTheDocument();
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

  it("renders owner-as-switchboard CRM article with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({
        slug: "ban-dang-dieu-hanh-doanh-nghiep-hay-di-hoi-tung-nhan-vien",
      }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Bạn đang điều hành doanh nghiệp hay đang làm tổng đài/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /CRM cho doanh nghiệp: mua xong rồi bỏ xó/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /CRM cho doanh nghiệp nhỏ là gì và có cần thiết không/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /vừa nhắn tin vừa mở sổ và Excel/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders small-center CRM leak article with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({
        slug: "trung-tam-nho-it-nguoi-cang-nen-co-crm",
      }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Trung tâm nhỏ, ít người: càng nên có CRM/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Vì sao trung tâm nhỏ lại dễ rơi học viên hơn/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /Trung tâm chỉ có vài chục học viên thì có cần CRM không/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /vừa nhắn Zalo vừa mở sổ và Excel/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders dance-studio Excel/Zalo ops article with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({
        slug: "mai-gv-nghi-nhan-zalo-sua-excel",
      }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Mai GV nghỉ — phải nhắn từng nhóm Zalo/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Quản lý học viên trung tâm cần thấy khóa, buổi, danh sách/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /Excel có đủ để quản lý học viên trung tâm không/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /vừa nhắn Zalo vừa mở Excel/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders SaaS explainer article with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({
        slug: "saas-la-gi-giai-thich-cho-chu-doanh-nghiep",
      }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /SaaS là gì\? Giải thích thẳng cho chủ doanh nghiệp/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /SaaS là gì\? — Nói như thuê nhà, không như mua đĩa/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /SaaS là gì — viết tắt của chữ gì/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /Chủ quán đứng quầy nhìn điện thoại/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders traffic-but-no-customers article with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({
        slug: "website-co-traffic-khong-ra-khach-hang",
      }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /10 lỗi khiến website có traffic nhưng không ra khách hàng/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Website có traffic và có khách hàng là hai chuyện khác nhau/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /Website có traffic cao nhưng không có khách hàng thì nguyên nhân chính là gì/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /Chủ tiệm spa nhìn inbox Zalo trống/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders business-website checklist 2026 article with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({
        slug: "website-doanh-nghiep-can-co-nhung-gi-checklist-2026",
      }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Website doanh nghiệp cần có những gì\? Checklist đầy đủ 2026/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Checklist 2026 — 8 nhóm website doanh nghiệp cần có/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /Website doanh nghiệp cần những trang nào/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /nút Zalo và Gọi nằm ngay phần đầu trang/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders website-vs-facebook article with FAQ", async () => {
    const page = await NewsArticlePage({
      params: Promise.resolve({
        slug: "website-hay-facebook-doanh-nghiep-nho",
      }),
    });
    render(<AppProviders>{page}</AppProviders>);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Website hay Facebook: Doanh nghiệp nhỏ nên đầu tư vào đâu/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Không phải chọn một — chia tiền thế nào/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /Doanh nghiệp nhỏ nên làm website hay chạy Facebook/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /điện thoại hiện trang mạng xã hội, laptop hiện website doanh nghiệp/i,
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
