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
        name: /ビジネスの課題をAIとテクノロジーで解く/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /事業について話す/i })[0],
    ).toHaveAttribute("href", "#contact");
    expect(
      screen.getAllByRole("button", { name: /見積もりを依頼|見積りを依頼/i }).length,
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
    expect(top!.compareDocumentPosition(fit!) & following).toBeTruthy();
    expect(fit!.compareDocumentPosition(problems!) & following).toBeTruthy();
    expect(problems!.compareDocumentPosition(why!) & following).toBeTruthy();
    expect(why!.compareDocumentPosition(solutions!) & following).toBeTruthy();
    expect(solutions!.compareDocumentPosition(agentDolphin!) & following).toBeTruthy();
    expect(agentDolphin!.compareDocumentPosition(dolphinOps!) & following).toBeTruthy();
    expect(dolphinOps!.compareDocumentPosition(works!) & following).toBeTruthy();
    expect(works!.compareDocumentPosition(process!) & following).toBeTruthy();
    expect(process!.compareDocumentPosition(popular!) & following).toBeTruthy();
    expect(popular!.compareDocumentPosition(stack!) & following).toBeTruthy();
    expect(stack!.compareDocumentPosition(technology!) & following).toBeTruthy();
    expect(technology!.compareDocumentPosition(aiEdge!) & following).toBeTruthy();
    expect(aiEdge!.compareDocumentPosition(news!) & following).toBeTruthy();
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
      within(dolphinOps!).getByRole("heading", {
        level: 2,
        name: /Agent CRM/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(dolphinOps!).getByRole("link", { name: /Opsの動きを見る/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/dolphin-ops\/?$/));
    expect(
      screen.getByRole("link", { name: /ソリューションを見る/i }),
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
    expect(process!.compareDocumentPosition(popular!) & following).toBeTruthy();
    expect(popular!.compareDocumentPosition(stack!) & following).toBeTruthy();
    expect(stack!.compareDocumentPosition(technology!) & following).toBeTruthy();
    expect(
      technology!.compareDocumentPosition(aiEdge!) & following,
    ).toBeTruthy();
    expect(
      within(technology!).getByRole("heading", {
        level: 2,
        name: /運用向けのAIソリューション/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(aiEdge!).getByRole("link", { name: /AI変革のロードマップ/i }),
    ).toHaveAttribute("href", expect.stringMatching(/\/ai-transform\/?$/));
    expect(
      within(aiEdge!).getByRole("link", {
        name: /Dolphin Intelligence を見る/i,
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
        name: /見つけてもらい、転換するためのWebパッケージ/i,
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

    await openLanguageMenu(user);
    await user.click(screen.getByRole("button", { name: /English/i }));
    expect(within(popular).getByText("$57")).toBeInTheDocument();

    await openLanguageMenu(user);
    await user.click(screen.getByRole("button", { name: /Tiếng Việt/i }));
    expect(within(popular).getByText("1.500.000đ")).toBeInTheDocument();

    await openLanguageMenu(user);
    await user.click(screen.getByRole("button", { name: /日本語/i }));
    expect(within(popular).getByText("￥9,300")).toBeInTheDocument();
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
    expect(problems!.compareDocumentPosition(why!) & following).toBeTruthy();
    expect(why!.compareDocumentPosition(solutions!) & following).toBeTruthy();
    expect(agentDolphin!.compareDocumentPosition(works!) & following).toBeTruthy();
    expect(works!.compareDocumentPosition(process!) & following).toBeTruthy();
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

  it("renders problems before solutions and process before faq", () => {
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
      problems!.compareDocumentPosition(solutions!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      process!.compareDocumentPosition(faq!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /何が事業を遅らせていますか/i,
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
        name: /機能の山を売りません/i,
      }),
    ).toBeInTheDocument();
    expect(document.getElementById("services")).toBeNull();
    expect(document.getElementById("contact")).toBeTruthy();
    const contact = within(document.getElementById("contact")!);
    expect(
      contact.getByRole("heading", {
        name: /御社の事業について話す/i,
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
        name: /小さな店にウェブサイトは必要か/i,
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
        name: /Kinh doanh nhỏ có cần website không/i,
      }),
    ).toHaveAttribute(
      "href",
      expect.stringMatching(/website-cho-kinh-doanh-nho/),
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

    const mobileNav = screen.getByRole("navigation", { name: /モバイルナビ/i });
    expect(
      within(mobileNav).getByRole("link", { name: /Dolphinに相談/i }),
    ).toHaveAttribute("href", "#contact");
    expect(
      within(mobileNav).getByRole("link", { name: /ソリューション/i }),
    ).toBeInTheDocument();
    expect(
      within(mobileNav).queryByRole("button", { name: /^サービス$/i }),
    ).not.toBeInTheDocument();
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

    const askAi = screen.getAllByRole("button", { name: /^Ask AI$/i })[0];
    expect(askAi).toBeTruthy();
    await user.click(askAi!);
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

    await openLanguageMenu(user);
    await user.click(screen.getByRole("button", { name: /Tiếng Việt/i }));

    expect(
      screen.getByRole("heading", {
        name: /Giải quyết vấn đề doanh nghiệp bằng AI & Công nghệ/i,
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
        name: /Solve Business Problems with AI & Technology/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /Talk about your business/i })[0],
    ).toHaveAttribute("href", "#contact");
  });

  it("switches language to Japanese", async () => {
    const user = userEvent.setup();
    renderHome();

    await openLanguageMenu(user);
    await user.click(screen.getByRole("button", { name: /English/i }));
    await openLanguageMenu(user);
    await user.click(screen.getByRole("button", { name: /日本語/i }));

    expect(
      screen.getByRole("heading", {
        name: /ビジネスの課題をAIとテクノロジーで解く/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /事業について話す/i })[0],
    ).toHaveAttribute("href", "#contact");
  });
});
