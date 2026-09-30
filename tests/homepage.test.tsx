import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Home from "@/app/page";
import { Nav } from "@/components/Nav";
import { AppProviders } from "@/components/AppProviders";

vi.mock("@/components/TurnstileGate", () => ({
  useTurnstileGate: () => ({
    requestToken: async () => "test-turnstile-token",
    focusPassed: true,
    gate: null,
  }),
  TurnstileGate: () => null,
}));

function renderHome() {
  return render(
    <AppProviders>
      <Home />
    </AppProviders>,
  );
}

/** Desktop + mobile both mount a Language control — pick the first. */
async function openLanguageMenu(
  user: ReturnType<typeof userEvent.setup>,
) {
  const buttons = screen.getAllByRole("button", { name: /^Language$/i });
  await user.click(buttons[0]!);
}

describe("Dolphin Software homepage", () => {
  it("renders hero brand and primary CTA", () => {
    renderHome();
    expect(screen.getAllByLabelText(/Dolphin Software/i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("heading", {
        name: /Giải pháp vận hành cho doanh nghiệp dịch vụ B2B/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /Nói về doanh nghiệp của bạn/i })[0],
    ).toHaveAttribute("href", "#contact");
    expect(
      screen.getAllByRole("button", { name: /Nhận báo giá/i }).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders homepage schema order", () => {
    renderHome();
    const top = document.getElementById("top");
    const fit = document.getElementById("fit");
    const problems = document.getElementById("problems");
    const why = document.getElementById("why");
    const solutions = document.getElementById("solutions");
    const capabilities = document.getElementById("capabilities");
    const works = document.getElementById("works");
    const agentDolphin = document.getElementById("dolphin-care");
    const dolphinOps = document.getElementById("dolphin-ops");
    const technology = document.getElementById("technology");
    const aiEdge = document.getElementById("ai-edge");
    const stack = document.getElementById("stack");
    const process = document.getElementById("process");
    const popular = document.getElementById("popular-services");
    const news = document.getElementById("news");
    const faq = document.getElementById("faq");
    const contact = document.getElementById("contact");

    expect(top).toBeTruthy();
    expect(fit).toBeTruthy();
    expect(problems).toBeTruthy();
    expect(why).toBeTruthy();
    expect(solutions).toBeTruthy();
    expect(capabilities).toBeTruthy();
    expect(works).toBeTruthy();
    expect(agentDolphin).toBeTruthy();
    expect(dolphinOps).toBeTruthy();
    expect(technology).toBeTruthy();
    expect(aiEdge).toBeTruthy();
    expect(stack).toBeTruthy();
    expect(process).toBeTruthy();
    expect(popular).toBeTruthy();
    expect(news).toBeTruthy();
    expect(faq).toBeTruthy();
    expect(contact).toBeTruthy();

    expect(document.getElementById("ops")).toBeNull();
    expect(document.getElementById("handover")).toBeNull();
    expect(document.getElementById("what-you-get")).toBeNull();
    expect(document.getElementById("ui-gallery")).toBeNull();
    expect(document.getElementById("stats")).toBeNull();

    const following = Node.DOCUMENT_POSITION_FOLLOWING;
    // CRM-first: solutions → Care → Ops → combo → fit → pain → why → works → process → stack…
    expect(top!.compareDocumentPosition(solutions!) & following).toBeTruthy();
    expect(solutions!.compareDocumentPosition(agentDolphin!) & following).toBeTruthy();
    expect(agentDolphin!.compareDocumentPosition(dolphinOps!) & following).toBeTruthy();
    expect(dolphinOps!.compareDocumentPosition(popular!) & following).toBeTruthy();
    expect(popular!.compareDocumentPosition(fit!) & following).toBeTruthy();
    expect(fit!.compareDocumentPosition(problems!) & following).toBeTruthy();
    expect(problems!.compareDocumentPosition(why!) & following).toBeTruthy();
    expect(why!.compareDocumentPosition(works!) & following).toBeTruthy();
    expect(works!.compareDocumentPosition(process!) & following).toBeTruthy();
    expect(process!.compareDocumentPosition(stack!) & following).toBeTruthy();
    expect(stack!.compareDocumentPosition(technology!) & following).toBeTruthy();
    expect(technology!.compareDocumentPosition(aiEdge!) & following).toBeTruthy();
    expect(aiEdge!.compareDocumentPosition(news!) & following).toBeTruthy();
    expect(news!.compareDocumentPosition(faq!) & following).toBeTruthy();
    expect(faq!.compareDocumentPosition(contact!) & following).toBeTruthy();

    expect(
      within(agentDolphin!).getByRole("link", { name: /Tìm hiểu Dolphin Care/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/dolphin-care\/?$/));
    expect(
      within(agentDolphin!).getByRole("button", { name: /Nhận báo giá/i }),
    ).toBeInTheDocument();
    expect(within(agentDolphin!).getByText(/Trả lời đúng ngữ cảnh/i)).toBeInTheDocument();
    expect(within(agentDolphin!).getByText(/^Spa$/i)).toBeInTheDocument();
    expect(
      within(dolphinOps!).getByRole("heading", {
        level: 2,
        name: /Agent CRM — đội ngũ nói việc, mở đúng màn/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(dolphinOps!).getByRole("link", { name: /Xem Ops chạy việc/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/dolphin-ops\/?$/));
    expect(
      screen.getByRole("link", { name: /Xem combo CRM · AI · Web/i }),
    ).toHaveAttribute("href", "#solutions");
  });

  it("renders ai transformation after process and website packages", () => {
    renderHome();
    const agentDolphin = document.getElementById("dolphin-care");
    const dolphinOps = document.getElementById("dolphin-ops");
    const process = document.getElementById("process");
    const popular = document.getElementById("popular-services");
    const stack = document.getElementById("stack");
    const technology = document.getElementById("technology");
    const aiEdge = document.getElementById("ai-edge");
    expect(agentDolphin).toBeTruthy();
    expect(dolphinOps).toBeTruthy();
    expect(process).toBeTruthy();
    expect(popular).toBeTruthy();
    expect(stack).toBeTruthy();
    expect(technology).toBeTruthy();
    expect(aiEdge).toBeTruthy();
    const following = Node.DOCUMENT_POSITION_FOLLOWING;
    expect(
      agentDolphin!.compareDocumentPosition(dolphinOps!) & following,
    ).toBeTruthy();
    expect(popular!.compareDocumentPosition(process!) & following).toBeTruthy();
    expect(process!.compareDocumentPosition(stack!) & following).toBeTruthy();
    expect(stack!.compareDocumentPosition(technology!) & following).toBeTruthy();
    expect(
      technology!.compareDocumentPosition(aiEdge!) & following,
    ).toBeTruthy();
    expect(
      within(technology!).getByRole("heading", {
        level: 2,
        name: /AI thực tế cho vận hành/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(aiEdge!).getByRole("link", { name: /Lộ trình chuyển đổi AI/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/ai-transform\/?$/));
    expect(
      within(aiEdge!).getByRole("link", {
        name: /Xem Dolphin Intelligence/i,
      }),
    ).toHaveAttribute(
      "href",
      expect.stringMatching(/\/dolphin-intelligence\/?$/),
    );
  });

  it("renders popular services click-select with landing price focus", async () => {
    const user = userEvent.setup();
    renderHome();
    const popular = document.getElementById("popular-services");
    expect(popular).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Phần mềm CRM tặng website — quyền lợi combo 2026/i,
      }),
    ).toBeInTheDocument();
    const section = within(popular as HTMLElement);
    expect(section.getByRole("heading", { name: /Landing Page/i })).toBeInTheDocument();
    expect(section.getByRole("heading", { name: /Website doanh nghiệp/i })).toBeInTheDocument();
    expect(section.getByText("1.500.000đ")).toBeInTheDocument();
    await user.click(section.getByRole("radio", { name: /Landing Page/i }));
    expect(
      section.getByRole("button", { name: /Nhận báo giá combo/i }),
    ).toBeInTheDocument();
  });

  it("converts popular service prices when switching language", async () => {
    const user = userEvent.setup();
    renderHome();
    const popular = document.getElementById("popular-services") as HTMLElement;
    expect(within(popular).getByText("1.500.000đ")).toBeInTheDocument();

    await openLanguageMenu(user);
    await user.click(screen.getByRole("button", { name: /English/i }));
    expect(within(popular).getByText("$57")).toBeInTheDocument();

    await openLanguageMenu(user);
    await user.click(screen.getByRole("button", { name: /Tiếng Việt/i }));
    expect(within(popular).getByText("1.500.000đ")).toBeInTheDocument();
  });

  it("renders projects and care before website packages", () => {
    renderHome();
    const popular = document.getElementById("popular-services");
    const works = document.getElementById("works");
    const agentDolphin = document.getElementById("dolphin-care");
    const problems = document.getElementById("problems");
    const why = document.getElementById("why");
    const solutions = document.getElementById("solutions");
    const process = document.getElementById("process");
    expect(document.getElementById("ui-gallery")).toBeNull();
    expect(document.getElementById("outcomes")).toBeNull();
    expect(solutions).toBeTruthy();
    expect(agentDolphin).toBeTruthy();
    expect(popular).toBeTruthy();
    expect(works).toBeTruthy();
    expect(problems).toBeTruthy();
    expect(why).toBeTruthy();
    expect(process).toBeTruthy();
    const following = Node.DOCUMENT_POSITION_FOLLOWING;
    expect(solutions!.compareDocumentPosition(agentDolphin!) & following).toBeTruthy();
    expect(agentDolphin!.compareDocumentPosition(popular!) & following).toBeTruthy();
    expect(popular!.compareDocumentPosition(problems!) & following).toBeTruthy();
    expect(problems!.compareDocumentPosition(why!) & following).toBeTruthy();
    expect(why!.compareDocumentPosition(works!) & following).toBeTruthy();
    expect(works!.compareDocumentPosition(process!) & following).toBeTruthy();
  });

  it("renders process headings", () => {
    renderHome();
    expect(
      screen.getByRole("heading", { name: /Hợp tác rõ ràng — năm bước đến bàn giao/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Lắng nghe & Khám phá/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Bàn giao & Đồng hành/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders solutions before problems and process before faq", () => {
    renderHome();
    const problems = document.getElementById("problems");
    const solutions = document.getElementById("solutions");
    const process = document.getElementById("process");
    const faq = document.getElementById("faq");
    expect(problems).toBeTruthy();
    expect(solutions).toBeTruthy();
    expect(process).toBeTruthy();
    expect(faq).toBeTruthy();
    expect(
      solutions!.compareDocumentPosition(problems!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      process!.compareDocumentPosition(faq!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Điều gì đang làm chậm doanh nghiệp của anh chị/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(problems!).getAllByRole("heading", { level: 3 }).length,
    ).toBeGreaterThanOrEqual(6);
  });

  it("does not render handover strip on homepage", () => {
    renderHome();
    expect(document.getElementById("handover")).toBeNull();
    expect(
      screen.queryByRole("region", { name: /Đầu ra bàn giao|Handover/i }),
    ).not.toBeInTheDocument();
  });

  it("renders process step deliverables and works outcomes", () => {
    renderHome();
    expect(screen.getAllByText(/Đầu ra:/i).length).toBeGreaterThanOrEqual(5);
    expect(screen.getAllByText(/^Bài toán$/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/^Phạm vi$/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/^Kết quả$/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders why, contact, and tech stack", () => {
    renderHome();
    expect(document.getElementById("stack")).toBeTruthy();
    expect(document.getElementById("news")).toBeTruthy();
    expect(document.getElementById("cofounder")).toBeNull();
    expect(
      screen.getByRole("heading", {
        name: /Đối tác vận hành — CRM lõi, AI tăng trưởng, website combo/i,
      }),
    ).toBeInTheDocument();
    expect(document.getElementById("services")).toBeNull();
    expect(document.getElementById("contact")).toBeTruthy();
    const contact = within(document.getElementById("contact")!);
    expect(
      contact.getByRole("heading", {
        name: /Cùng xây cách vận hành tốt hơn/i,
      }),
    ).toBeInTheDocument();
    expect(
      contact.getByRole("link", { name: /Chat Zalo/i }),
    ).toHaveAttribute("href", "https://zalo.me/0779937633");
    expect(
      contact.getByRole("link", { name: /Gửi email/i }),
    ).toHaveAttribute("href", "mailto:support@dolphin-software.io.vn");
  });

  it("renders news section with latest post", () => {
    renderHome();
    const news = document.getElementById("news");
    expect(news).toBeTruthy();
    expect(
      within(news!).getByRole("link", {
        name: /ChatGPT Ads đã có ở Việt Nam/i,
      }),
    ).toHaveAttribute("aria-current", "true");
    expect(
      within(news!).getByRole("link", { name: /Xem đầy đủ/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/news\/?$/));
  });

  it("links active news carousel card to article detail page", () => {
    window.localStorage.setItem("kuct-locale", "vi");
    renderHome();

    const news = document.getElementById("news");
    expect(news).toBeTruthy();

    expect(
      within(news!).getByRole("link", {
        name: /ChatGPT Ads đã có ở Việt Nam/i,
      }),
    ).toHaveAttribute(
      "href",
      expect.stringMatching(/chatgpt-ads-viet-nam/),
    );
  });

  it("reveals the contact link from the mobile menu", async () => {
    const user = userEvent.setup();
    render(
      <AppProviders>
        <Nav />
      </AppProviders>,
    );

    await user.click(screen.getByRole("button", { name: /Mở menu/i }));

    const mobileNav = screen.getByRole("navigation", { name: /Điều hướng di động/i });
    expect(
      within(mobileNav).getByRole("link", { name: /^Care$/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/dolphin-care\/?$/));
    expect(
      within(mobileNav).getByRole("link", { name: /Tin tức/i }),
    ).toBeInTheDocument();
    expect(
      within(mobileNav).queryByRole("button", { name: /^Dịch vụ$/i }),
    ).not.toBeInTheDocument();
  });

  it("renders FAQ heading on the homepage", () => {
    renderHome();
    expect(
      screen.getByRole("heading", { level: 2, name: /Câu hỏi thường gặp/i }),
    ).toBeInTheDocument();
  });

  it("keeps AI chat widget clickable when toggled", async () => {
    const user = userEvent.setup();
    renderHome();

    const careFab = screen.getByRole("button", {
      name: /Hỏi AI|Ask AI —|AIに聞く/i,
    });
    await user.click(careFab);
    expect(
      screen.getByRole("dialog", { name: /Dolphin Assist|Dolphin Care/i }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /Mở liên hệ nhanh/i }),
    );
    expect(
      screen.getAllByRole("link", { name: /Chat Zalo/i })[0],
    ).toHaveAttribute("href", "https://zalo.me/0779937633");
  });

  it("opens the same chat drawer from the floating Care FAB", async () => {
    const user = userEvent.setup();
    renderHome();

    const careFab = screen.getByRole("button", {
      name: /Hỏi AI|Ask AI —|AIに聞く/i,
    });
    await user.click(careFab);
    expect(
      screen.getByRole("dialog", { name: /Dolphin Assist|Dolphin Care/i }),
    ).toBeInTheDocument();
  });

  it("hides theme switcher temporarily", () => {
    render(
      <AppProviders>
        <Nav />
      </AppProviders>,
    );

    expect(
      screen.queryByRole("button", { name: /Color theme|Chủ đề màu|テーマ/i }),
    ).not.toBeInTheDocument();
  });

  it("switches language to Vietnamese", async () => {
    const user = userEvent.setup();
    renderHome();

    await openLanguageMenu(user);
    await user.click(screen.getByRole("button", { name: /Tiếng Việt/i }));

    expect(
      screen.getByRole("heading", {
        name: /Giải pháp vận hành cho doanh nghiệp dịch vụ B2B/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /Nói về doanh nghiệp của bạn/i })[0],
    ).toHaveAttribute("href", "#contact");
  });

  it("switches language to English", async () => {
    const user = userEvent.setup();
    renderHome();

    await openLanguageMenu(user);
    await user.click(screen.getByRole("button", { name: /English/i }));

    expect(
      screen.getByRole("heading", {
        name: /Operations solutions for B2B service businesses/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /Talk about your business/i })[0],
    ).toHaveAttribute("href", "#contact");
  });

});
