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
        name: /プロ仕様のWebsite & Webアプリ — 明確なスコープで届ける/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /見積もりを依頼/i }).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders dolphin care chat teaser right after hero", () => {
    renderHome();
    const top = document.getElementById("top");
    const agentDolphin = document.getElementById("dolphin-care");
    const technology = document.getElementById("technology");
    const capabilities = document.getElementById("capabilities");
    const aiEdge = document.getElementById("ai-edge");
    expect(top).toBeTruthy();
    expect(agentDolphin).toBeTruthy();
    expect(technology).toBeTruthy();
    expect(capabilities).toBeTruthy();
    expect(aiEdge).toBeTruthy();
    expect(
      top!.compareDocumentPosition(agentDolphin!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      agentDolphin!.compareDocumentPosition(technology!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      within(agentDolphin!).getByRole("link", { name: /Dolphin Careを見る/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/dolphin-care\/?$/));
    expect(
      capabilities!.compareDocumentPosition(aiEdge!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("renders ai edge after tech stack before why us", () => {
    renderHome();
    const stack = document.getElementById("stack");
    const aiEdge = document.getElementById("ai-edge");
    const why = document.getElementById("why");
    expect(stack).toBeTruthy();
    expect(aiEdge).toBeTruthy();
    expect(why).toBeTruthy();
    expect(
      stack!.compareDocumentPosition(aiEdge!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      aiEdge!.compareDocumentPosition(why!) &
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
    await user.click(screen.getByRole("button", { name: /Deutsch/i }));
    expect(
      within(popular).getByText((content) => /^33\s*€$/.test(content.trim())),
    ).toBeInTheDocument();
  });

  it("renders web block after capabilities without ui gallery", () => {
    renderHome();
    const capabilities = document.getElementById("capabilities");
    const popular = document.getElementById("popular-services");
    const works = document.getElementById("works");
    const outcomes = document.getElementById("outcomes");
    expect(document.getElementById("ui-gallery")).toBeNull();
    expect(capabilities).toBeTruthy();
    expect(popular).toBeTruthy();
    expect(works).toBeTruthy();
    expect(outcomes).toBeTruthy();
    expect(
      capabilities!.compareDocumentPosition(popular!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      popular!.compareDocumentPosition(works!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      works!.compareDocumentPosition(outcomes!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("renders capabilities and process headings", () => {
    renderHome();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /運用成果に結びつけるソリューション/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /引き渡しまでの5ステップ/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/ヒアリング & 調査/i)).toBeInTheDocument();
    expect(screen.getByText(/引き渡し & 伴走/i)).toBeInTheDocument();
  });

  it("renders delivery sections after outcomes", () => {
    renderHome();
    const outcomes = document.getElementById("outcomes");
    const process = document.getElementById("process");
    const whatYouGet = document.getElementById("what-you-get");
    const ops = document.getElementById("ops");
    const handover = document.getElementById("handover");
    const stack = document.getElementById("stack");
    expect(outcomes).toBeTruthy();
    expect(process).toBeTruthy();
    expect(whatYouGet).toBeTruthy();
    expect(ops).toBeTruthy();
    expect(handover).toBeTruthy();
    expect(stack).toBeTruthy();
    expect(
      outcomes!.compareDocumentPosition(process!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      process!.compareDocumentPosition(whatYouGet!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      whatYouGet!.compareDocumentPosition(ops!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      ops!.compareDocumentPosition(handover!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      handover!.compareDocumentPosition(stack!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /引き渡し後に回せる仕事/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /プロジェクトは明確な成果物で終わる/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/リード獲得と転換をはっきり/i)).toBeInTheDocument();
    expect(
      screen.getByText(/確定したスコープとマイルストーン/i),
    ).toBeInTheDocument();
  });

  it("renders handover deliverables checklist", () => {
    renderHome();
    expect(
      screen.getByRole("region", { name: /引き渡し成果物/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /プロジェクト完了時に受け取るもの/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/^Source$/i)).toBeInTheDocument();
    expect(screen.getByText(/CMS \/ Admin/i)).toBeInTheDocument();
    expect(screen.getByText(/Domain \/ Hosting/i)).toBeInTheDocument();
  });

  it("renders process step deliverables and works outcomes", () => {
    renderHome();
    expect(screen.getAllByText(/成果物:/i).length).toBeGreaterThanOrEqual(5);
    expect(screen.getAllByText(/^課題$/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/^範囲$/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/^結果$/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders stack, why, news teaser and contact section", () => {
    renderHome();
    expect(
      screen.getByRole("heading", {
        name: /確かなエンジニアリング.*モダンな技術/i,
      }),
    ).toBeInTheDocument();
    const stack = document.getElementById("stack");
    expect(stack).toBeTruthy();
    expect(within(stack!).getByText("React")).toBeInTheDocument();
    expect(within(stack!).getByText("Next.js")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /コード納品だけで終わらない、長期伴走/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Nguyễn Chí Thành/i })).toBeInTheDocument();
    expect(screen.queryByText(/追加サービス/)).not.toBeInTheDocument();
    expect(document.getElementById("services")).toBeNull();
    expect(
      screen.getByRole("heading", { level: 2, name: /最新のメモ/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /すべてのニュースを見る/i }),
    ).toHaveAttribute("href", "/news/");
    const newsSection = document.getElementById("news");
    expect(newsSection).toBeTruthy();
    expect(
      within(newsSection!).getByText(
        /プロダクト・技術・進め方の短い記事です/,
      ),
    ).toBeInTheDocument();
    const newsList = newsSection!.querySelector("ul");
    expect(newsList).toHaveClass("md:grid-cols-3");
    const newsItems = within(newsSection!).getAllByRole("listitem");
    expect(newsItems).toHaveLength(9);
    expect(newsItems[0]).toHaveClass("h-full", "flex", "flex-col");
    expect(newsItems[0].querySelectorAll("img")).toHaveLength(1);
    expect(newsItems[1].querySelectorAll("img")).toHaveLength(1);
    expect(newsItems[2].querySelectorAll("img")).toHaveLength(1);
    expect(newsItems[3].querySelectorAll("img")).toHaveLength(0);
    expect(newsItems[4].querySelectorAll("img")).toHaveLength(0);
    expect(newsItems[5].querySelectorAll("img")).toHaveLength(0);
    expect(newsItems[6].querySelectorAll("img")).toHaveLength(0);
    expect(newsItems[7].querySelectorAll("img")).toHaveLength(0);
    expect(newsItems[8].querySelectorAll("img")).toHaveLength(0);
    expect(
      within(newsItems[0]).getByRole("heading", {
        name: /全部書き直さずに MVP から V1 へ/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(newsItems[1]).getByRole("heading", {
        name: /デザイントークンとテーマ/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(newsSection!).queryByRole("link", { name: /続きを読む/i }),
    ).not.toBeInTheDocument();
    const titleLink = within(newsSection!).getByRole("link", {
      name: /全部書き直さずに MVP から V1 へ/i,
    });
    expect(titleLink).toHaveAttribute("href", "/news/from-mvp-to-v1/");
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

  it("paginates homepage news nine items at a time", async () => {
    const user = userEvent.setup();
    renderHome();

    const newsSection = document.getElementById("news");
    expect(newsSection).toBeTruthy();
    expect(
      within(newsSection!).getByRole("heading", {
        name: /全部書き直さずに MVP から V1 へ/i,
      }),
    ).toBeInTheDocument();
    expect(within(newsSection!).getByText(/1 \/ \d+/)).toBeInTheDocument();

    await user.click(
      within(newsSection!).getByRole("button", { name: /次のページ/i }),
    );

    expect(within(newsSection!).getByText(/2 \/ \d+/)).toBeInTheDocument();
    expect(
      within(newsSection!).getByRole("heading", {
        name: /週次デモできるフリーランスの採用/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(newsSection!).queryByRole("heading", {
        name: /全部書き直さずに MVP から V1 へ/i,
      }),
    ).not.toBeInTheDocument();
    const pageTwoItems = within(newsSection!).getAllByRole("listitem");
    expect(pageTwoItems).toHaveLength(9);
    expect(pageTwoItems[0].querySelectorAll("img")).toHaveLength(1);
    expect(pageTwoItems[1].querySelectorAll("img")).toHaveLength(1);
    expect(pageTwoItems[2].querySelectorAll("img")).toHaveLength(1);
    expect(pageTwoItems[3].querySelectorAll("img")).toHaveLength(0);
    expect(pageTwoItems[4].querySelectorAll("img")).toHaveLength(0);
    expect(pageTwoItems[5].querySelectorAll("img")).toHaveLength(0);
    expect(pageTwoItems[6].querySelectorAll("img")).toHaveLength(0);
    expect(pageTwoItems[7].querySelectorAll("img")).toHaveLength(0);
    expect(pageTwoItems[8].querySelectorAll("img")).toHaveLength(0);
    expect(
      within(newsSection!).queryByRole("link", { name: /続きを読む/i }),
    ).not.toBeInTheDocument();
    expect(
      within(newsSection!).getByRole("link", {
        name: /週次デモできるフリーランスの採用/i,
      }),
    ).toHaveAttribute("href", "/news/hiring-for-delivery/");
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
    expect(screen.getByRole("link", { name: /Zaloでチャット/i })).toHaveAttribute(
      "href",
      "https://zalo.me/0779937633",
    );
    expect(
      screen.getByRole("dialog", { name: /Dolphin Assist/i }),
    ).toBeInTheDocument();
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
        name: /Website & web app chuyên nghiệp — scope rõ, ship được/i,
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
        name: /Professional websites & web apps — clear scope, shipped right/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /Get a quote/i }).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("switches language to German", async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /Deutsch/i }));

    expect(
      screen.getByRole("heading", {
        name: /Professionelle Websites & Web-Apps — klarer Scope, sauber geliefert/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /Angebot anfordern/i }).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("switches language to Chinese", async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /中文/i }));

    expect(
      screen.getByRole("heading", {
        name: /专业级网站与 Web 应用 — 范围清晰，按时交付/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /获取报价/i }).length,
    ).toBeGreaterThanOrEqual(1);
  });
});
