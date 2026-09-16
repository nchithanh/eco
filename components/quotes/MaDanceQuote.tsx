"use client";

import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { BRAND_LOGO_SRC } from "@/lib/brand-logo";
import { assetPath } from "@/lib/asset";
import {
  buildMaDanceQuoteJson,
  defaultMaDanceQuoteState,
  loadMaDanceQuoteState,
  saveMaDanceQuoteState,
  type MaDanceQuoteState,
} from "@/lib/quotes/ma-dance-export";
import {
  CLIENT_NAME,
  COMBOS,
  CRM_SCOPE,
  EXTRAS,
  MONTHLY,
  ONCE,
  PREPARED_BY,
  PREPARED_PHONE,
  PRODUCT_LABEL,
  RANGE_EXTRAS,
  CARE_STANDALONE,
  comboGiftLines,
  comboIncludesCare,
  type CareStandaloneTerm,
  type ComboId,
  type ExtraKey,
  computeQuoteTotals,
  extraPriceHint,
  VOLUME_DISCOUNT_THRESHOLD,
  formatVnd,
  getCombo,
} from "@/lib/quotes/ma-dance-pricing";

function productsLabel(products: readonly ("crm" | "care" | "ops")[]): string {
  return products.map((p) => PRODUCT_LABEL[p]).join(" + ");
}

export function MaDanceQuote() {
  const [state, setState] = useState<MaDanceQuoteState>(defaultMaDanceQuoteState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(loadMaDanceQuoteState());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveMaDanceQuoteState(state);
  }, [state, ready]);

  const totals = useMemo(() => computeQuoteTotals(state), [state]);
  const hasCrm = totals.combo.products.includes("crm");
  const showCareStandalone = !comboIncludesCare(totals.combo);

  const setCombo = useCallback((comboId: ComboId) => {
    setState((prev) => ({
      ...prev,
      comboId,
      careStandalone: getCombo(comboId).products.includes("care") ? null : prev.careStandalone,
    }));
  }, []);

  const toggleExtra = useCallback((key: ExtraKey, checked: boolean) => {
    setState((prev) => {
      const extras = { ...prev.extras, [key]: checked };
      if (prev.comboId === "crm-base-12" && checked) {
        if (key === "landing") extras.website = false;
        if (key === "website") extras.landing = false;
      }
      return { ...prev, extras };
    });
  }, []);

  const giftLines = comboGiftLines(totals.combo);

  const handlePrint = () => window.print();

  const handleExportJson = () => {
    const payload = buildMaDanceQuoteJson(state);
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dolphin-quote-ma-dance-${state.quoteDate}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (!window.confirm("Đặt lại lựa chọn gói và tùy chọn?")) return;
    setState(defaultMaDanceQuoteState());
  };

  return (
    <div className="quote-form">
      <div className="quote-form__wrap">
        <header>
          <div>
            <div className="brand-lockup">
              <img
                className="brand-logo"
                src={assetPath(BRAND_LOGO_SRC)}
                alt=""
                width={40}
                height={40}
              />
              <div>
                <p className="brand-word">Dolphin Software</p>
                <p className="brand-tag">Since 2026</p>
              </div>
            </div>
            <p className="eyebrow">Báo giá / Quote</p>
            <h1>Báo giá CRM — MA Dance</h1>
            <div className="contact">
              {PREPARED_BY}
              <br />
              <a href={`tel:${PREPARED_PHONE}`}>{PREPARED_PHONE}</a>
            </div>
          </div>
          <div className="meta">
            <div className="client-lockup">
              <img
                className="client-logo"
                src={assetPath("/demo/ma-dance-logo.jpeg")}
                alt="MA Dance"
                width={52}
                height={52}
              />
              <div>
                <p className="client-name">{CLIENT_NAME}</p>
                <p className="client-label">Khách hàng</p>
              </div>
            </div>
            <label className="field">
              Ngày
              <input
                className="plain"
                type="date"
                value={state.quoteDate}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, quoteDate: e.target.value }))
                }
              />
            </label>
          </div>
        </header>

        <div className="toolbar no-print">
          <button type="button" onClick={handlePrint}>
            In / PDF
          </button>
          <button type="button" onClick={handleExportJson}>
            Xuất giá JSON
          </button>
          <button type="button" className="ghost" onClick={handleReset}>
            Đặt lại lựa chọn
          </button>
        </div>

        <p className="note">
          Chọn <strong>một gói combo</strong> theo bảng giá Dolphin Software. CRM đơn lẻ
          chỉ bán <strong>12 tháng</strong>; gói <strong>6 tháng</strong> chỉ khi kèm Dolphin
          Care hoặc Dolphin Ops.{" "}
          <strong>Giá trên phiếu là giá Dolphin</strong> — không gồm phí Zalo OA, ZNS, SMTP,
          cổng thanh toán, Google… <strong>Không dùng thử miễn phí.</strong>
        </p>

        <h2>Gói combo chính thức</h2>
        <div className="combo-grid" role="radiogroup" aria-label="Chọn gói combo">
          {COMBOS.map((combo) => (
            <label key={combo.id} className="combo-card">
              <input
                type="radio"
                name="combo"
                value={combo.id}
                checked={state.comboId === combo.id}
                onChange={() => setCombo(combo.id)}
              />
              <p className="combo-card__name">{combo.name}</p>
              <p className="combo-card__meta">
                {productsLabel(combo.products)} · {combo.months} tháng
              </p>
              <p className="combo-card__price">{formatVnd(combo.price)}</p>
              <p className="combo-card__support">{combo.support}</p>
            </label>
          ))}
        </div>

        {giftLines.length > 0 ? (
          <div className="policy-box">
            <p className="note" style={{ marginTop: 0 }}>
              <strong>Quyền lợi gói {totals.combo.name}:</strong>
            </p>
            <ul>
              {giftLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {showCareStandalone ? (
          <>
            <h2>Gói thuê lẻ Dolphin Care</h2>
            <p className="note">
              <strong>Dolphin Care</strong> = chatbot AI trả lời khách hàng trên website / Zalo /
              Messenger. Gói combo <strong>{totals.combo.name}</strong> chưa gồm Care. Tick một kỳ
              hạn bên dưới để cộng vào tổng — giá ưu đãi thuê lẻ, khác combo CRM + Care.
            </p>
            <div className="table-scroll">
              <table className="care-standalone-table">
                <thead>
                  <tr>
                    <th>Thời hạn</th>
                    <th className="num">Giá gốc</th>
                    <th className="num">Giá ưu đãi</th>
                    <th className="num">Mức giảm</th>
                    <th className="num">Giá trung bình / tháng</th>
                  </tr>
                </thead>
                <tbody>
                  {CARE_STANDALONE.map((plan) => (
                    <tr
                      key={plan.term}
                      className={
                        state.careStandalone === plan.term ? "care-standalone-table__selected" : ""
                      }
                    >
                      <td>
                        <strong>{plan.months} tháng</strong>
                      </td>
                      <td className="num">{formatVnd(plan.list)}</td>
                      <td className="num">
                        <strong>{formatVnd(plan.price)}</strong>
                      </td>
                      <td className="num">{plan.discountPct}%</td>
                      <td className="num">{formatVnd(plan.avgMonthly)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="support-picks no-print"
              role="radiogroup"
              aria-label="Chọn gói thuê lẻ Dolphin Care"
            >
              <label>
                <input
                  type="radio"
                  name="careStandalone"
                  checked={state.careStandalone === null}
                  onChange={() => setState((prev) => ({ ...prev, careStandalone: null }))}
                />
                Không thuê lẻ Dolphin Care
              </label>
              {CARE_STANDALONE.map((plan) => (
                <label key={plan.term}>
                  <input
                    type="radio"
                    name="careStandalone"
                    checked={state.careStandalone === plan.term}
                    onChange={() =>
                      setState((prev) => ({
                        ...prev,
                        careStandalone: plan.term as CareStandaloneTerm,
                      }))
                    }
                  />
                  {plan.months} tháng — {formatVnd(plan.price)} (giảm {plan.discountPct}%)
                </label>
              ))}
            </div>
          </>
        ) : null}

        <h2>Tùy chọn thêm — Outsource / Tích hợp</h2>
        <p className="note no-print">
          Các hạng mục dưới đây không bắt buộc. Tick để cộng vào tổng — Landing / Website áp
          quyền lợi gói combo ở trên khi có.
        </p>
        {EXTRAS.map((extra) => (
          <label key={extra.key} className="addon-row no-print">
            <input
              type="checkbox"
              checked={state.extras[extra.key]}
              onChange={(e) => toggleExtra(extra.key, e.target.checked)}
            />
            <div className="addon-row__body">
              <p className="addon-row__title">{extra.title}</p>
              <p className="addon-row__scope">{extra.scope}</p>
            </div>
            <span className="addon-row__price">
              {extraPriceHint(totals.combo, extra.key)}
            </span>
          </label>
        ))}
        <h3>Khoảng giá (tham khảo)</h3>
        <p className="note">
          Bảng dưới giúp khách xem các hạng mục đã chốt giá thuộc nhóm nào trong bảng giá
          Dolphin — <strong>không tick, không cộng tổng</strong>.
        </p>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Nhóm</th>
                <th>Khoảng giá</th>
                <th>Ví dụ trên phiếu</th>
              </tr>
            </thead>
            <tbody>
              {RANGE_EXTRAS.map((item) => (
                <tr key={item.key}>
                  <td>{item.title}</td>
                  <td className="num">{item.range}</td>
                  <td>
                    {EXTRAS.filter((extra) => extra.rangeKey === item.key)
                      .map((extra) => extra.title)
                      .join(" · ") || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {hasCrm ? (
          <div className="no-print">
            <h3>Add-on — Dolphin Intelligence</h3>
            <label className="addon-row">
              <input
                type="checkbox"
                checked={state.intelligence}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, intelligence: e.target.checked }))
                }
              />
              <div className="addon-row__body">
                <p className="addon-row__title">Dolphin Intelligence (AI cảnh báo & xử lý dữ liệu)</p>
                <p className="addon-row__scope">
                  Giám sát cuối ngày; phát hiện vấn đề; admin duyệt → hệ thống xử lý. Chỉ thêm
                  khi đã chọn gói có CRM.
                </p>
              </div>
              <span className="addon-row__price">
                {formatVnd(MONTHLY.intelligence)}/tháng × {totals.combo.months} ={" "}
                {formatVnd(MONTHLY.intelligence * totals.combo.months)}
              </span>
            </label>
          </div>
        ) : null}

        <h2>Tổng thanh toán trước</h2>
        <div className="table-scroll">
          <table className="totals-table">
            <thead>
              <tr>
                <th>Hạng mục</th>
                <th className="num">Giá gốc (niêm yết)</th>
                <th className="num">Thanh toán</th>
              </tr>
            </thead>
            <tbody>
              <tr className="subtotal">
                <td>
                  Gói {totals.combo.name} ({productsLabel(totals.combo.products)} ·{" "}
                  {totals.combo.months} tháng)
                </td>
                <td className="num">{formatVnd(totals.saasList)}</td>
                <td className="num">{formatVnd(totals.combo.price)}</td>
              </tr>
              {totals.careLine ? (
                <Fragment key="care-standalone">
                  <tr className="subtotal">
                    <td>{totals.careLine.title}</td>
                    <td className="num">{formatVnd(totals.careLine.list)}</td>
                    <td className="num">{formatVnd(totals.careLine.due)}</td>
                  </tr>
                  <tr className="gift">
                    <td>{totals.careLine.giftLabel}</td>
                    <td className="num">−{formatVnd(totals.careLine.gift)}</td>
                    <td className="num">—</td>
                  </tr>
                </Fragment>
              ) : null}
              {totals.extraLines.map((line) => (
                <Fragment key={line.key}>
                  <tr className="subtotal">
                    <td>{line.title}</td>
                    <td className="num">{formatVnd(line.list)}</td>
                    <td className="num">{formatVnd(line.due)}</td>
                  </tr>
                  {line.gift && line.giftLabel ? (
                    <tr className="gift">
                      <td>{line.giftLabel}</td>
                      <td className="num">−{formatVnd(line.gift)}</td>
                      <td className="num">—</td>
                    </tr>
                  ) : null}
                </Fragment>
              ))}
              {totals.intelligenceDue > 0 ? (
                <tr className="subtotal">
                  <td>
                    Dolphin Intelligence ({totals.combo.months} tháng)
                  </td>
                  <td className="num">{formatVnd(totals.intelligenceDue)}</td>
                  <td className="num">{formatVnd(totals.intelligenceDue)}</td>
                </tr>
              ) : null}
              {totals.volumeDiscount > 0 ? (
                <tr className="gift">
                  <td>{totals.volumeDiscountLabel}</td>
                  <td className="num">−{formatVnd(totals.volumeDiscount)}</td>
                  <td className="num">−{formatVnd(totals.volumeDiscount)}</td>
                </tr>
              ) : null}
              <tr className="due">
                <td>
                  <strong>Tổng thanh toán trước</strong>
                </td>
                <td className="num">{formatVnd(totals.list)}</td>
                <td className="num">
                  <strong>{formatVnd(totals.prepaid)}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>A. CRM — phạm vi vận hành MA (đã gồm trong gói CRM)</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Hạng mục</th>
                <th>Phạm vi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>CRM chuyển đổi vận hành MA</strong>
                  <ul className="incl">
                    {CRM_SCOPE.map((item) => (
                      <li key={item.id}>
                        <strong>
                          {item.id} · {item.title}
                        </strong>{" "}
                        — {item.body}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>Đã gồm trong gói combo đã chọn</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Chính sách giá</h2>
        <div className="policy-box">
          <ul>
            <li>
              <strong>CRM đơn lẻ:</strong> chỉ gói <strong>12 tháng</strong> (CRM Base 12 —{" "}
              {formatVnd(COMBOS[0].price)}).
            </li>
            <li>
              <strong>Gói 6 tháng</strong> chỉ khi kèm Dolphin Care hoặc Dolphin Ops.
            </li>
            <li>
              <strong>Thuê lẻ Dolphin Care</strong> (chatbot AI trên website / Zalo / Messenger · 6
              tháng {formatVnd(5_100_000)} · 12 tháng {formatVnd(9_600_000)}) — chỉ khi gói combo{" "}
              <strong>chưa gồm Care</strong>.
            </li>
            <li>
              Từ <strong>CRM + Care 6</strong> trở đi: <strong>tặng Website doanh nghiệp</strong>{" "}
              ({formatVnd(ONCE.website)}) — khi tick <strong>Website doanh nghiệp</strong> ở mục
              Outsource / Tích hợp.
            </li>
            <li>
              CRM Base 12: <strong>tặng Landing Page</strong> hoặc{" "}
              <strong>giảm 50% Website</strong> (trả {formatVnd(ONCE.website / 2)}) — khi tick
              hạng mục tương ứng ở mục Outsource / Tích hợp.
            </li>
            <li>
              Thanh toán trước <strong>trên {formatVnd(VOLUME_DISCOUNT_THRESHOLD)}</strong>: giảm
              thêm <strong>10%</strong> trên tổng thanh toán (sau ưu đãi web / Care).
            </li>
            <li>
              <strong>Không dùng thử miễn phí.</strong>
            </li>
            <li>
              Phí bên thứ ba (Zalo OA, ZNS, SMTP, cổng thanh toán, Google…){" "}
              <strong>không bao gồm</strong> trong giá Dolphin.
            </li>
            <li>
              Bảng giá tháng tham chiếu: CRM {formatVnd(MONTHLY.crm)}/th · Care (chatbot AI){" "}
              {formatVnd(MONTHLY.care)}/th · Ops {formatVnd(MONTHLY.ops)}/th · Intelligence{" "}
              {formatVnd(MONTHLY.intelligence)}/th.
            </li>
          </ul>
        </div>

        <h2>Bảo hành</h2>
        <p className="note">
          <strong>Website</strong> (khi được tặng hoặc mua thêm): bảo hành{" "}
          <strong>36 tháng</strong> chỉnh sửa cơ bản. <strong>CRM / SaaS:</strong> sửa lỗi trong
          thời hạn gói đã thanh toán. Tính năng mới / tích hợp bên thứ ba sau nghiệm thu — báo
          riêng.
        </p>

        <h2>Chi phí ngoài giá Dolphin</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Hạng mục</th>
                <th>Ghi chú</th>
                <th className="num">Ai trả</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Domain / tên miền</strong>
                </td>
                <td>Đăng ký &amp; gia hạn tên miền — không gồm trong giá Dolphin</td>
                <td className="num">Khách → nhà đăng ký</td>
              </tr>
              <tr>
                <td>
                  <strong>Zalo Official Account</strong>
                </td>
                <td>Gói OA, tin lẻ, ZNS — không gồm trong giá Dolphin</td>
                <td className="num">Khách → Zalo</td>
              </tr>
              <tr>
                <td>
                  <strong>Fanpage / Meta</strong>
                </td>
                <td>Phí nền tảng / quảng cáo nếu Meta thu</td>
                <td className="num">Khách → Meta</td>
              </tr>
              <tr>
                <td>
                  <strong>Email / SMTP</strong>
                </td>
                <td>Máy chủ gửi mail hàng loạt</td>
                <td className="num">Khách → nhà mail</td>
              </tr>
              <tr>
                <td>
                  <strong>Google Calendar</strong>
                </td>
                <td>Tài khoản Google của MA; phí Workspace/API nếu có</td>
                <td className="num">Khách → Google</td>
              </tr>
              <tr>
                <td>
                  <strong>Cổng thanh toán</strong>
                </td>
                <td>Phí giao dịch / duy trì — khác phí tích hợp Dolphin</td>
                <td className="num">Khách → cổng</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Ghi chú</h2>
        <label className="field no-print" style={{ textTransform: "none", letterSpacing: 0 }}>
          Ghi chú thêm trên báo giá
          <textarea
            className="plain"
            value={state.notes}
            placeholder="Điều khoản, lịch bàn giao…"
            onChange={(e) =>
              setState((prev) => ({ ...prev, notes: e.target.value }))
            }
          />
        </label>
        {state.notes ? <p className="note">{state.notes}</p> : null}

        <footer>
          <p className="motto">
            <img src={assetPath(BRAND_LOGO_SRC)} alt="" width={28} height={28} />
            <span className="motto-text">Start from the problem, not the product</span>
          </p>
          Dolphin Software · dolphin-software.io.vn · {PREPARED_BY} · {PREPARED_PHONE}
          <br />
          Gói đã chọn: <strong>{totals.combo.name}</strong> —{" "}
          <strong>{formatVnd(totals.prepaid)}</strong> trả trước. Phí nền tảng bên thứ ba
          không gồm trong tổng.
        </footer>
      </div>
    </div>
  );
}
