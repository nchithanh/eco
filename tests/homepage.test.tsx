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

describe("Dolphin Kick homepage", () => {
  it("renders hero brand and primary CTA", () => {
    renderHome();
    expect(screen.getAllByLabelText(/Dolphin Kich/i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByRole("heading", {
        name: /事業の課題から、運用しやすいシステムへ/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /見積もりを依頼/i }),
    ).toBeInTheDocument();
  });

  it("renders technology under hero before capabilities", () => {
    renderHome();
    const top = document.getElementById("top");
    const technology = document.getElementById("technology");
    const capabilities = document.getElementById("capabilities");
    expect(top).toBeTruthy();
    expect(technology).toBeTruthy();
    expect(capabilities).toBeTruthy();
    expect(
      top!.compareDocumentPosition(technology!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      technology!.compareDocumentPosition(capabilities!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /AI を業務の中核へ/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(technology!).getByRole("link", { name: /詳しく見る/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/ai-transform\/?$/));
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

  it("renders site outcomes and what-you-get after capabilities", () => {
    renderHome();
    const capabilities = document.getElementById("capabilities");
    const outcomes = document.getElementById("outcomes");
    const whatYouGet = document.getElementById("what-you-get");
    const ops = document.getElementById("ops");
    expect(capabilities).toBeTruthy();
    expect(outcomes).toBeTruthy();
    expect(whatYouGet).toBeTruthy();
    expect(
      capabilities!.compareDocumentPosition(outcomes!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      outcomes!.compareDocumentPosition(whatYouGet!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      whatYouGet!.compareDocumentPosition(ops!) &
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
    expect(newsItems).toHaveLength(6);
    expect(newsItems[0]).toHaveClass("h-full", "flex", "flex-col");
    expect(newsItems[0].querySelectorAll("img")).toHaveLength(1);
    expect(newsItems[1].querySelectorAll("img")).toHaveLength(1);
    expect(newsItems[2].querySelectorAll("img")).toHaveLength(1);
    expect(newsItems[3].querySelectorAll("img")).toHaveLength(0);
    expect(newsItems[4].querySelectorAll("img")).toHaveLength(0);
    expect(newsItems[5].querySelectorAll("img")).toHaveLength(0);
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

  it("paginates homepage news six items at a time", async () => {
    const user = userEvent.setup();
    renderHome();

    const newsSection = document.getElementById("news");
    expect(newsSection).toBeTruthy();
    expect(
      within(newsSection!).getByRole("heading", {
        name: /全部書き直さずに MVP から V1 へ/i,
      }),
    ).toBeInTheDocument();
    expect(within(newsSection!).getByText("1 / 5")).toBeInTheDocument();

    await user.click(
      within(newsSection!).getByRole("button", { name: /次のページ/i }),
    );

    expect(within(newsSection!).getByText("2 / 5")).toBeInTheDocument();
    expect(
      within(newsSection!).getByRole("heading", {
        name: /口頭の「だいたいX」より見積を書く理由/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(newsSection!).queryByRole("heading", {
        name: /全部書き直さずに MVP から V1 へ/i,
      }),
    ).not.toBeInTheDocument();
    const pageTwoItems = within(newsSection!).getAllByRole("listitem");
    expect(pageTwoItems).toHaveLength(6);
    expect(pageTwoItems[0].querySelectorAll("img")).toHaveLength(1);
    expect(pageTwoItems[1].querySelectorAll("img")).toHaveLength(1);
    expect(pageTwoItems[2].querySelectorAll("img")).toHaveLength(1);
    expect(pageTwoItems[3].querySelectorAll("img")).toHaveLength(0);
    expect(pageTwoItems[4].querySelectorAll("img")).toHaveLength(0);
    expect(pageTwoItems[5].querySelectorAll("img")).toHaveLength(0);
    expect(
      within(newsSection!).queryByRole("link", { name: /続きを読む/i }),
    ).not.toBeInTheDocument();
    expect(
      within(newsSection!).getByRole("link", {
        name: /口頭の「だいたいX」より見積を書く理由/i,
      }),
    ).toHaveAttribute("href", "/news/why-we-write-estimates/");
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
        name: /Từ bài toán kinh doanh đến hệ thống dễ vận hành/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Nhận báo giá/i }),
    ).toBeInTheDocument();
  });

  it("switches language to English", async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /English/i }));

    expect(
      screen.getByRole("heading", {
        name: /From business problems to systems you can run/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Get a quote/i }),
    ).toBeInTheDocument();
  });

  it("switches language to German", async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /Deutsch/i }));

    expect(
      screen.getByRole("heading", {
        name: /Vom Geschäftsproblem zum betreibbaren System/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Angebot anfordern/i }),
    ).toBeInTheDocument();
  });

  it("switches language to Chinese", async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole("button", { name: /^Language$/i }));
    await user.click(screen.getByRole("button", { name: /中文/i }));

    expect(
      screen.getByRole("heading", {
        name: /从业务问题到可运营的系统/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /获取报价/i }),
    ).toBeInTheDocument();
  });
});
