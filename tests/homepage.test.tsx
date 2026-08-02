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
        name: /テクノロジーを事業の負担にしない/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /見積もりを依頼/i }).length,
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
    const process = document.getElementById("process");
    const fit = document.getElementById("fit");
    const popular = document.getElementById("popular-services");
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
    expect(process).toBeTruthy();
    expect(popular).toBeTruthy();
    expect(faq).toBeTruthy();
    expect(contact).toBeTruthy();

    expect(document.getElementById("stack")).toBeNull();
    expect(document.getElementById("ops")).toBeNull();
    expect(document.getElementById("news")).toBeNull();
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
    // Fit is VI-only; default test locale may omit `#fit`
    if (fit) {
      expect(process!.compareDocumentPosition(fit) & following).toBeTruthy();
      expect(fit.compareDocumentPosition(popular!) & following).toBeTruthy();
    } else {
      expect(process!.compareDocumentPosition(popular!) & following).toBeTruthy();
    }
    expect(popular!.compareDocumentPosition(faq!) & following).toBeTruthy();
    expect(faq!.compareDocumentPosition(contact!) & following).toBeTruthy();

    expect(
      within(agentDolphin!).getByRole("link", { name: /Dolphin Careを見る/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/dolphin-care\/?$/));
    expect(
      within(agentDolphin!).getByRole("button", { name: /見積もりを依頼/i }),
    ).toBeInTheDocument();
    expect(within(agentDolphin!).getByText(/用件に合う返答/i)).toBeInTheDocument();
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
        name: /Websiteが本体 — AIは加速レイヤー/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(aiEdge!).getByRole("link", { name: /企業のAI変革/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/ai-transform\/?$/));
    expect(
      within(aiEdge!).getByRole("link", { name: /カスタムAI Agent/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/custom-agent\/?$/));
  });

  it("renders popular services comparison with landing price focus", () => {
    renderHome();
    const popular = document.getElementById("popular-services");
    expect(popular).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /人気のサービス/i,
      }),
    ).toBeInTheDocument();
    const section = within(popular as HTMLElement);
    expect(section.getByRole("heading", { name: /ランディングページ/i })).toBeInTheDocument();
    expect(section.getByRole("heading", { name: /企業サイト/i })).toBeInTheDocument();
    expect(section.getByRole("heading", { name: /ECサイト/i })).toBeInTheDocument();
    expect(section.getByRole("heading", { name: /カスタムWebアプリ/i })).toBeInTheDocument();
    expect(section.getByText("￥6,200")).toBeInTheDocument();
    expect(section.getByRole("button", { name: /LP見積もり/i })).toBeInTheDocument();
    expect(section.getByRole("link", { name: /Zaloで無料相談/i })).toHaveAttribute(
      "href",
      "https://zalo.me/0779937633",
    );
  });

  it("converts popular service prices when switching language", async () => {
    const user = userEvent.setup();
    renderHome();
    const popular = document.getElementById("popular-services") as HTMLElement;
    expect(within(popular).getByText("￥6,200")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /English/i }));
    expect(within(popular).getByText("$38")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /Tiếng Việt/i }));
    expect(within(popular).getByText("1.000.000đ")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /日本語/i }));
    expect(within(popular).getByText("￥6,200")).toBeInTheDocument();
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
      screen.getByRole("heading", { name: /引き渡しまでの5ステップ/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/ヒアリング & 調査/i)).toBeInTheDocument();
    expect(screen.getByText(/引き渡し & 伴走/i)).toBeInTheDocument();
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
        name: /引き渡し後に回せる仕事/i,
      }),
    ).toBeInTheDocument();
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

  it("renders why and contact; no stack or news on homepage", () => {
    renderHome();
    expect(document.getElementById("stack")).toBeNull();
    expect(document.getElementById("news")).toBeNull();
    expect(document.getElementById("cofounder")).toBeNull();
    expect(
      screen.getByRole("heading", {
        name: /コード納品だけで終わらない、長期伴走/i,
      }),
    ).toBeInTheDocument();
    expect(document.getElementById("services")).toBeNull();
    expect(document.getElementById("contact")).toBeTruthy();
    const contact = within(document.getElementById("contact")!);
    expect(
      contact.getByRole("heading", { name: /プロジェクトを始めませんか/i }),
    ).toBeInTheDocument();
    expect(
      contact.getByRole("link", { name: /Zaloで相談/i }),
    ).toHaveAttribute("href", "https://zalo.me/0779937633");
    expect(
      contact.getByRole("link", { name: /メールを送る/i }),
    ).toHaveAttribute("href", "mailto:nchithanh9999@gmail.com");
  });

  it("keeps news off the homepage schema", () => {
    renderHome();
    expect(document.getElementById("news")).toBeNull();
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
        name: /Don't let technology become a burden on your business/i,
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
        name: /テクノロジーを事業の負担にしない/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /見積もりを依頼/i }).length,
    ).toBeGreaterThanOrEqual(1);
  });
});
