import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { Nav } from "@/components/Nav";
import { AppProviders } from "@/components/AppProviders";

function renderHome() {
  return render(
    <AppProviders>
      <Home />
    </AppProviders>,
  );
}

describe("Dolphin Software homepage", () => {
  it("renders hero brand and primary CTA", () => {
    renderHome();
    expect(screen.getAllByLabelText(/Dolphin Software/i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("heading", {
        name: /テクノロジーを企業の負担にさせない/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /見積もりを依頼|見積りを依頼/i }).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders homepage schema order", () => {
    renderHome();
    const top = document.getElementById("top");
    const stats = document.getElementById("stats");
    const why = document.getElementById("why");
    const capabilities = document.getElementById("capabilities");
    const works = document.getElementById("works");
    const agentDolphin = document.getElementById("dolphin-care");
    const technology = document.getElementById("technology");
    const aiEdge = document.getElementById("ai-edge");
    const stack = document.getElementById("stack");
    const process = document.getElementById("process");
    const fit = document.getElementById("fit");
    const popular = document.getElementById("popular-services");
    const news = document.getElementById("news");
    const faq = document.getElementById("faq");
    const contact = document.getElementById("contact");

    expect(top).toBeTruthy();
    expect(stats).toBeTruthy();
    expect(why).toBeTruthy();
    expect(capabilities).toBeTruthy();
    expect(works).toBeTruthy();
    expect(agentDolphin).toBeTruthy();
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

    const following = Node.DOCUMENT_POSITION_FOLLOWING;
    expect(top!.compareDocumentPosition(stats!) & following).toBeTruthy();
    expect(stats!.compareDocumentPosition(why!) & following).toBeTruthy();
    expect(why!.compareDocumentPosition(capabilities!) & following).toBeTruthy();
    expect(capabilities!.compareDocumentPosition(works!) & following).toBeTruthy();
    expect(works!.compareDocumentPosition(agentDolphin!) & following).toBeTruthy();
    expect(agentDolphin!.compareDocumentPosition(technology!) & following).toBeTruthy();
    expect(technology!.compareDocumentPosition(aiEdge!) & following).toBeTruthy();
    expect(aiEdge!.compareDocumentPosition(process!) & following).toBeTruthy();
    expect(process!.compareDocumentPosition(popular!) & following).toBeTruthy();
    // Tech stack sits immediately under Hero
    expect(top!.compareDocumentPosition(stack!) & following).toBeTruthy();
    if (fit) {
      expect(stack!.compareDocumentPosition(fit) & following).toBeTruthy();
      expect(fit.compareDocumentPosition(stats!) & following).toBeTruthy();
    } else {
      expect(stack!.compareDocumentPosition(stats!) & following).toBeTruthy();
    }
    expect(popular!.compareDocumentPosition(news!) & following).toBeTruthy();
    expect(news!.compareDocumentPosition(faq!) & following).toBeTruthy();
    expect(faq!.compareDocumentPosition(contact!) & following).toBeTruthy();

    expect(
      within(agentDolphin!).getByRole("link", { name: /Dolphin Careを見る/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/dolphin-care\/?$/));
    expect(
      within(agentDolphin!).getByRole("button", { name: /見積もりを依頼/i }),
    ).toBeInTheDocument();
    expect(within(agentDolphin!).getByText(/24時間の文脈対応/i)).toBeInTheDocument();
    expect(within(agentDolphin!).getByText(/Spa · 予約/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Webサービスを見る/i }),
    ).toHaveAttribute("href", "#capabilities");
  });

  it("renders ai transformation after dolphin care", () => {
    renderHome();
    const agentDolphin = document.getElementById("dolphin-care");
    const technology = document.getElementById("technology");
    const aiEdge = document.getElementById("ai-edge");
    const process = document.getElementById("process");
    expect(agentDolphin).toBeTruthy();
    expect(technology).toBeTruthy();
    expect(aiEdge).toBeTruthy();
    expect(process).toBeTruthy();
    expect(
      agentDolphin!.compareDocumentPosition(technology!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      technology!.compareDocumentPosition(aiEdge!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      aiEdge!.compareDocumentPosition(process!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Webサイトが基盤.*AI.*スマートレイヤー/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(aiEdge!).getByRole("link", { name: /企業AI変革/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/ai-transform\/?$/));
    expect(
      within(aiEdge!).getByRole("link", { name: /Dolphin Careを見る/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/dolphin-care\/?$/));
  });

  it("renders popular services click-select with landing price focus", async () => {
    const user = userEvent.setup();
    renderHome();
    const popular = document.getElementById("popular-services");
    expect(popular).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /人気サービス/i,
      }),
    ).toBeInTheDocument();
    const section = within(popular as HTMLElement);
    expect(section.getByRole("heading", { name: /ランディングページ/i })).toBeInTheDocument();
    expect(section.getByRole("heading", { name: /企業サイト/i })).toBeInTheDocument();
    expect(section.getByRole("heading", { name: /ECサイト|オンラインショップ/i })).toBeInTheDocument();
    expect(section.getByRole("heading", { name: /カスタムWebアプリ|Webアプリ/i })).toBeInTheDocument();
    expect(section.getByText("￥9,300")).toBeInTheDocument();
    await user.click(section.getByRole("radio", { name: /ランディングページ/i }));
    expect(section.getByRole("button", { name: /LP見積もり|LP見積り/i })).toBeInTheDocument();
    expect(section.getByRole("link", { name: /Zaloで相談/i })).toHaveAttribute(
      "href",
      "https://zalo.me/0779937633",
    );
  });

  it("converts popular service prices when switching language", async () => {
    const user = userEvent.setup();
    renderHome();
    const popular = document.getElementById("popular-services") as HTMLElement;
    expect(within(popular).getByText("￥9,300")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /English/i }));
    expect(within(popular).getByText("$57")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /Tiếng Việt/i }));
    expect(within(popular).getByText("1.500.000đ")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /日本語/i }));
    expect(within(popular).getByText("￥9,300")).toBeInTheDocument();
  });

  it("renders projects and care before solutions (packages near end)", () => {
    renderHome();
    const popular = document.getElementById("popular-services");
    const works = document.getElementById("works");
    const agentDolphin = document.getElementById("dolphin-care");
    const stats = document.getElementById("stats");
    const why = document.getElementById("why");
    const capabilities = document.getElementById("capabilities");
    const process = document.getElementById("process");
    expect(document.getElementById("ui-gallery")).toBeNull();
    expect(document.getElementById("outcomes")).toBeNull();
    expect(capabilities).toBeTruthy();
    expect(agentDolphin).toBeTruthy();
    expect(popular).toBeTruthy();
    expect(works).toBeTruthy();
    expect(stats).toBeTruthy();
    expect(why).toBeTruthy();
    expect(process).toBeTruthy();
    const following = Node.DOCUMENT_POSITION_FOLLOWING;
    expect(stats!.compareDocumentPosition(why!) & following).toBeTruthy();
    expect(why!.compareDocumentPosition(capabilities!) & following).toBeTruthy();
    expect(works!.compareDocumentPosition(agentDolphin!) & following).toBeTruthy();
    expect(agentDolphin!.compareDocumentPosition(process!) & following).toBeTruthy();
    expect(process!.compareDocumentPosition(popular!) & following).toBeTruthy();
  });

  it("renders process headings", () => {
    renderHome();
    expect(
      screen.getByRole("heading", { name: /明確な納品を伴う5ステッププロセス/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/傾聴と発見/i)).toBeInTheDocument();
    expect(screen.getByText(/納品とパートナーシップ/i)).toBeInTheDocument();
  });

  it("renders stats before what-we-do and process before faq", () => {
    renderHome();
    const stats = document.getElementById("stats");
    const capabilities = document.getElementById("capabilities");
    const process = document.getElementById("process");
    const faq = document.getElementById("faq");
    expect(stats).toBeTruthy();
    expect(capabilities).toBeTruthy();
    expect(process).toBeTruthy();
    expect(faq).toBeTruthy();
    expect(
      stats!.compareDocumentPosition(capabilities!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      process!.compareDocumentPosition(faq!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /納品後、御社が自ら運用できる業務/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(stats!).getAllByRole("heading", { level: 3 }).length,
    ).toBeGreaterThanOrEqual(6);
    expect(within(stats!).getAllByText(/詳しく見る/i).length).toBeGreaterThanOrEqual(6);
  });

  it("does not render handover strip on homepage", () => {
    renderHome();
    expect(document.getElementById("handover")).toBeNull();
    expect(
      screen.queryByRole("region", { name: /引き渡し成果物/i }),
    ).not.toBeInTheDocument();
  });

  it("renders process step deliverables and works outcomes", () => {
    renderHome();
    expect(screen.getAllByText(/成果物:/i).length).toBeGreaterThanOrEqual(5);
    expect(screen.getAllByText(/^課題$/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/^範囲$/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/^結果$/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders why, contact, and tech stack", () => {
    renderHome();
    expect(document.getElementById("stack")).toBeTruthy();
    expect(document.getElementById("news")).toBeTruthy();
    expect(document.getElementById("cofounder")).toBeNull();
    expect(
      screen.getByRole("heading", {
        name: /長期パートナー、コードを渡すだけではない/i,
      }),
    ).toBeInTheDocument();
    expect(document.getElementById("services")).toBeNull();
    expect(document.getElementById("contact")).toBeTruthy();
    const contact = within(document.getElementById("contact")!);
    expect(
      contact.getByRole("heading", {
        name: /Webサイト構築またはワークフロー自動化の準備はできましたか/i,
      }),
    ).toBeInTheDocument();
    expect(
      contact.getByRole("link", { name: /Zaloで相談/i }),
    ).toHaveAttribute("href", "https://zalo.me/0779937633");
    expect(
      contact.getByRole("link", { name: /メールを送る/i }),
    ).toHaveAttribute("href", "mailto:nchithanh9999@gmail.com");
  });

  it("renders news section with latest post", () => {
    renderHome();
    const news = document.getElementById("news");
    expect(news).toBeTruthy();
    expect(
      within(news!).getByRole("link", {
        name: /Dolphin Care：チャットbotだけではない/i,
      }),
    ).toHaveAttribute("aria-current", "true");
    expect(
      within(news!).getByRole("link", { name: /すべて見る/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/news\/?$/));
  });

  it("links active news carousel card to article detail page", () => {
    window.localStorage.setItem("kuct-locale", "vi");
    renderHome();

    const news = document.getElementById("news");
    expect(news).toBeTruthy();

    expect(
      within(news!).getByRole("link", {
        name: /Dolphin Care: Không Chỉ Chatbot AI/i,
      }),
    ).toHaveAttribute(
      "href",
      expect.stringMatching(/dolphin-care-bao-cao-insight-hang-ngay/),
    );
  });

  it("reveals the contact link from the mobile menu", async () => {
    const user = userEvent.setup();
    render(
      <AppProviders>
        <Nav />
      </AppProviders>,
    );

    await user.click(screen.getByRole("button", { name: /メニューを開く/i }));

    expect(
      within(
        screen.getByRole("navigation", { name: /モバイルナビ/i }),
      ).getByRole("link", { name: /お問い合わせ/i }),
    ).toHaveAttribute("href", "#contact");
  });

  it("renders FAQ heading on the homepage", () => {
    renderHome();
    expect(
      screen.getByRole("heading", { level: 2, name: /よくある質問/i }),
    ).toBeInTheDocument();
  });

  it("keeps AI chat widget clickable when toggled", async () => {
    const user = userEvent.setup();
    renderHome();

    const toggle = screen.getByRole("button", {
      name: /Dolphin Assist チャットを開く/i,
    });
    expect(toggle).toBeInTheDocument();
    await user.click(toggle);
    expect(
      screen.getByRole("button", { name: /Dolphin Assist チャットを閉じる/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("dialog", { name: /Dolphin Assist/i }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /クイック連絡を開く/i }),
    );
    expect(screen.getByRole("link", { name: /Zaloでチャット/i })).toHaveAttribute(
      "href",
      "https://zalo.me/0779937633",
    );
  });

  it("hides theme switcher temporarily", () => {
    render(
      <AppProviders>
        <Nav />
      </AppProviders>,
    );

    expect(
      screen.queryByRole("button", { name: /カラーテーマ/i }),
    ).not.toBeInTheDocument();
  });

  it("switches language to Vietnamese", async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /Tiếng Việt/i }));

    expect(
      screen.getByRole("heading", {
        name: /Đừng để công nghệ trở thành gánh nặng cho doanh nghiệp/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /Nhận báo giá/i }).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("switches language to English", async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /English/i }));

    expect(
      screen.getByRole("heading", {
        name: /Don't let technology become a burden for your business/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /Get a quote/i }).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("switches language to Japanese", async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /日本語/i }));

    expect(
      screen.getByRole("heading", {
        name: /テクノロジーを企業の負担にさせない/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /見積もりを依頼|見積りを依頼/i }).length,
    ).toBeGreaterThanOrEqual(1);
  });
});
