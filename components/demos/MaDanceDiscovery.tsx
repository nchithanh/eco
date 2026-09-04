import Link from "next/link";
import { assetPath } from "@/lib/asset";
import { maDanceDiscoveryCopy as c } from "@/lib/demos/ma-dance-discovery-copy";

function DiscTable({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <div className="ma-disc__table-wrap">
      <table className="ma-disc__table">
        {caption ? <caption className="ma-disc__caption">{caption}</caption> : null}
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={`${row[0]}-${i}`}>
              {row.map((cell, j) => (
                <td key={`${i}-${j}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MaDanceDiscovery() {
  return (
    <div className="ma-disc">
      <div className="ma-disc__inner">
        <p className="ma-disc__bar">
          <Link href={assetPath("/demos/")}>← Demo vault</Link>
          {" · "}
          {c.barLabel}
        </p>

        <header className="ma-disc__hero">
          <p className="ma-disc__eyebrow">Business collect</p>
          <h1>{c.title}</h1>
          <p className="ma-disc__lead">{c.lead}</p>
          <p className="ma-disc__source">{c.source}</p>
        </header>

        <ul className="ma-disc__stats" aria-label="Tóm tắt quy mô">
          {c.stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>

        <aside className="ma-disc__callout" aria-labelledby="ma-disc-model">
          <h2 id="ma-disc-model">Mô hình vận hành</h2>
          <p>{c.model}</p>
        </aside>

        <section aria-labelledby="ma-disc-branches">
          <h2 id="ma-disc-branches">1. Cơ sở & phòng</h2>
          <p className="ma-disc__note">{c.branchRule}</p>
          <DiscTable
            headers={["Chi nhánh", "Phòng", "Ghi chú"]}
            rows={c.branches.map((b) => [b.branch, b.rooms, b.note])}
          />
        </section>

        <section aria-labelledby="ma-disc-roles">
          <h2 id="ma-disc-roles">2. Vai trò & phân quyền</h2>
          <DiscTable
            headers={["Vai trò", "Được làm", "Không / hạn chế"]}
            rows={c.roles.map((r) => [r.role, r.can, r.cannot])}
          />
        </section>

        <section aria-labelledby="ma-disc-course">
          <h2 id="ma-disc-course">3. Khóa học & buổi</h2>
          <div className="ma-disc__cards">
            <article>
              <h3>Thuộc tính khóa bắt buộc</h3>
              <p>{c.courseRequired}</p>
            </article>
            <article>
              <h3>Lịch & kết thúc</h3>
              <p>{c.courseSchedule}</p>
            </article>
          </div>
          <h3>Nhận giữa khóa theo level</h3>
          <DiscTable
            headers={["Level", "Quy tắc nhận HV"]}
            rows={c.midEnroll.map((m) => [m.level, m.rule])}
          />
          <DiscTable
            headers={["Rule", "Quyết định MA"]}
            rows={c.courseRules.map((r) => [r.rule, r.value])}
          />
        </section>

        <section aria-labelledby="ma-disc-people">
          <h2 id="ma-disc-people">4. Học viên & giáo viên</h2>
          <div className="ma-disc__split">
            <div>
              <h3>Học viên</h3>
              <DiscTable
                headers={["Hạng mục", "Rule"]}
                rows={c.students.map((s) => [s.item, s.rule])}
              />
            </div>
            <div>
              <h3>Giáo viên</h3>
              <DiscTable
                headers={["Hạng mục", "Rule"]}
                rows={c.teachers.map((t) => [t.item, t.rule])}
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="ma-disc-finance">
          <h2 id="ma-disc-finance">5. Tài chính (gói)</h2>
          <DiscTable
            headers={["Hạng mục", "Rule MA"]}
            rows={c.finance.map((f) => [f.item, f.rule])}
          />
          <aside className="ma-disc__warn">
            <h3>Trống trên form</h3>
            <p>{c.financeGaps}</p>
          </aside>
        </section>

        <section aria-labelledby="ma-disc-attendance">
          <h2 id="ma-disc-attendance">6. Điểm danh & Calendar</h2>
          <div className="ma-disc__cards">
            <article>
              <h3>
                Điểm danh <span className="ma-disc__pill ma-disc__pill--ok">Đã chốt</span>
              </h3>
              <ul className="ma-disc__bullets">
                {c.attendanceDone.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
            <article>
              <h3>
                QR (câu 35–38){" "}
                <span className="ma-disc__pill ma-disc__pill--gap">Gap</span>
              </h3>
              <p>{c.qrGap}</p>
            </article>
          </div>
          <DiscTable
            headers={["Calendar", "Quyết định"]}
            rows={c.calendar.map((row) => [row.item, row.rule])}
          />
        </section>

        <section aria-labelledby="ma-disc-hold">
          <h2 id="ma-disc-hold">7. Bảo lưu</h2>
          <DiscTable
            headers={["Rule", "Chi tiết"]}
            rows={c.hold.map((h) => [h.rule, h.detail])}
          />
          <aside className="ma-disc__warn">
            <h3>Chưa trả lời</h3>
            <p>{c.holdGaps}</p>
          </aside>
        </section>

        <section aria-labelledby="ma-disc-follow">
          <h2 id="ma-disc-follow">8. Follow-up ưu tiên</h2>
          <p className="ma-disc__note">
            Câu trống / mơ hồ cần hỏi lại trước khi lock requirement.
          </p>
          <DiscTable
            headers={["#", "Chủ đề", "Vì sao quan trọng"]}
            rows={c.followUps.map((f) => [f.n, f.topic, f.why])}
          />
        </section>

        <aside className="ma-disc__callout ma-disc__callout--end" aria-labelledby="ma-disc-end">
          <h2 id="ma-disc-end">Kết luận BA</h2>
          <p>{c.conclusion}</p>
        </aside>
      </div>
    </div>
  );
}
