"use client";

import { useEffect, useMemo, useState } from "react";
import { formatViDate, localIsoDate } from "../../lib/edu";
import {
  TASK_ASSIGNEES,
  TASK_STATUS_LABEL,
  assigneeById,
  studioTaskKpis,
  taskDueBucket,
} from "../../lib/tasks-demo";
import type { DemoStudioTask, StudioTaskStatus } from "../../lib/types";
import { MoreMenu, copyId } from "./MoreMenu";
import { StatusChip, workTaskChip } from "./StatusChip";
import "./chrome.css";
import "./EduTable.css";
import "./TasksBoard.css";

type TasksBoardProps = {
  title: string;
  tasks: DemoStudioTask[];
  onChange: (next: DemoStudioTask[]) => void;
};

type StatusFilter = "all" | StudioTaskStatus;
type DueFilter = "all" | "overdue" | "today" | "later";
type DetailTab = "overview" | "update";

const PAGE_SIZE = 12;
const STATUSES: StudioTaskStatus[] = ["todo", "doing", "done", "cancelled"];

function nextCode(tasks: DemoStudioTask[]): string {
  const nums = tasks.map((t) => Number(t.code.replace(/\D/g, ""))).filter((n) => Number.isFinite(n));
  const max = nums.length ? Math.max(...nums) : 23;
  return `TV-${String(max + 1).padStart(4, "0")}`;
}

export function TasksBoard({ title, tasks, onChange }: TasksBoardProps) {
  const today = localIsoDate();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [panelDismissed, setPanelDismissed] = useState(false);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [assigneeFilter, setAssigneeFilter] = useState("all");
  const [dueFilter, setDueFilter] = useState<DueFilter>("all");
  const [page, setPage] = useState(0);
  const [detailTab, setDetailTab] = useState<DetailTab>("overview");
  const [adding, setAdding] = useState(false);
  const [draftTitle, setDraftTitle] = useState("");
  const [draftDetail, setDraftDetail] = useState("");
  const [draftAssignee, setDraftAssignee] = useState<string>(TASK_ASSIGNEES[0].id);
  const [draftDue, setDraftDue] = useState(today);

  const kpis = useMemo(() => studioTaskKpis(tasks, today), [tasks, today]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...tasks]
      .filter((row) => {
        if (statusFilter !== "all" && row.status !== statusFilter) return false;
        if (assigneeFilter !== "all" && row.assigneeId !== assigneeFilter) return false;
        if (dueFilter !== "all" && taskDueBucket(row.due, today) !== dueFilter) return false;
        if (!q) return true;
        const who = assigneeById(row.assigneeId).name;
        return `${row.title} ${row.code} ${row.detail} ${who} ${row.courseName ?? ""}`.toLowerCase().includes(q);
      })
      .sort((a, b) => {
        const openA = a.status === "todo" || a.status === "doing" ? 0 : 1;
        const openB = b.status === "todo" || b.status === "doing" ? 0 : 1;
        if (openA !== openB) return openA - openB;
        return a.due.localeCompare(b.due) || a.code.localeCompare(b.code);
      });
  }, [tasks, query, statusFilter, assigneeFilter, dueFilter, today]);

  useEffect(() => {
    if (adding || panelDismissed) return;
    if (selectedId && filtered.some((t) => t.id === selectedId)) return;
    setSelectedId(filtered[0]?.id ?? null);
  }, [filtered, selectedId, panelDismissed, adding]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageSafe = Math.min(page, pageCount - 1);
  const paged = filtered.slice(pageSafe * PAGE_SIZE, pageSafe * PAGE_SIZE + PAGE_SIZE);
  const selected = tasks.find((t) => t.id === selectedId) ?? null;

  function pickTask(id: string) {
    setAdding(false);
    setPanelDismissed(false);
    setSelectedId(id);
    setDetailTab("overview");
  }

  function closePanel() {
    setAdding(false);
    setPanelDismissed(true);
    setSelectedId(null);
  }

  function resetPage() {
    setPage(0);
    setPanelDismissed(false);
  }

  function patch(id: string, next: Partial<DemoStudioTask>) {
    onChange(tasks.map((row) => (row.id === id ? { ...row, ...next } : row)));
  }

  function addTask() {
    const title = draftTitle.trim();
    if (!title) return;
    const id = `tv-${Date.now().toString(36).slice(-5)}`;
    const created: DemoStudioTask = {
      id,
      code: nextCode(tasks),
      title,
      detail: draftDetail.trim() || "Demo FE, chưa server.",
      assigneeId: draftAssignee,
      status: "todo",
      due: draftDue || today,
    };
    onChange([created, ...tasks]);
    setDraftTitle("");
    setDraftDetail("");
    setAdding(false);
    pickTask(id);
  }

  return (
    <section className="ops-work" aria-labelledby="ops-tasks-heading">
      <div className="ops-board__layout ops-work__layout">
        <div className="ops-board__main ops-work__main">
          <nav className="ops-crumb" aria-label="Breadcrumb">
            <ol>
              <li>Trang chủ</li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
          <div className="ops-page__head">
            <div>
              <h1 id="ops-tasks-heading" className="ops-page__title" tabIndex={-1}>
                {title}
              </h1>
              <p className="ops-page__lede">Giao việc nội bộ — thay chia task trên Zalo. Không phải Jira.</p>
            </div>
            <button
              className="ops-page__cta"
              type="button"
              onClick={() => {
                setAdding(true);
                setPanelDismissed(false);
                setSelectedId(null);
              }}
            >
              + Thêm việc
            </button>
          </div>

          <ul className="ops-kpi-row ops-kpi-row--6">
            {kpis.map((kpi) => (
              <li key={kpi.id}>
                <article className="ops-kpi-card">
                  <span className="ops-kpi-card__top">
                    <span className="ops-kpi-card__ico" aria-hidden>
                      {kpi.ico}
                    </span>
                    <span className="ops-kpi-card__k">{kpi.label}</span>
                  </span>
                  <p className="ops-kpi-card__v">{kpi.value}</p>
                  <p className={kpi.up ? "ops-kpi-card__trend ops-kpi-card__trend--up" : "ops-kpi-card__trend ops-kpi-card__trend--down"}>
                    {kpi.trend} <span>so với tuần trước</span>
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <div className="ops-table-card">
            <div className="ops-table-tools">
              <label className="ops-table-search">
                <span className="ops-sr">Tìm việc</span>
                <input
                  type="search"
                  value={query}
                  placeholder="Tìm tiêu đề, mã, người nhận…"
                  onChange={(e) => {
                    setQuery(e.target.value);
                    resetPage();
                  }}
                />
              </label>
              <select
                aria-label="Trạng thái"
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value as StatusFilter);
                  resetPage();
                }}
              >
                <option value="all">Tất cả trạng thái</option>
                {STATUSES.map((id) => (
                  <option key={id} value={id}>
                    {TASK_STATUS_LABEL[id]}
                  </option>
                ))}
              </select>
              <select
                aria-label="Người nhận"
                value={assigneeFilter}
                onChange={(e) => {
                  setAssigneeFilter(e.target.value);
                  resetPage();
                }}
              >
                <option value="all">Tất cả người nhận</option>
                {TASK_ASSIGNEES.map((row) => (
                  <option key={row.id} value={row.id}>
                    {row.name}
                  </option>
                ))}
              </select>
              <select
                aria-label="Hạn"
                value={dueFilter}
                onChange={(e) => {
                  setDueFilter(e.target.value as DueFilter);
                  resetPage();
                }}
              >
                <option value="all">Mọi hạn</option>
                <option value="overdue">Quá hạn</option>
                <option value="today">Hôm nay</option>
                <option value="later">Sau hôm nay</option>
              </select>
            </div>

            <div className="ops-table-wrap">
              <table className="ops-table">
                <caption className="ops-sr">Danh sách tác vụ</caption>
                <thead>
                  <tr>
                    <th scope="col">Việc</th>
                    <th scope="col">Người nhận</th>
                    <th scope="col">Hạn</th>
                    <th scope="col">Khóa / lớp</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">
                      <span className="ops-sr">Thao tác</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paged.map((item) => {
                    const who = assigneeById(item.assigneeId);
                    const chip = workTaskChip(item.status);
                    const bucket = taskDueBucket(item.due, today);
                    const current = item.id === selectedId && !adding;
                    return (
                      <tr
                        key={item.id}
                        className={current ? "ops-table__row ops-table__row--on" : "ops-table__row"}
                        onClick={() => pickTask(item.id)}
                      >
                        <th scope="row">
                          <span className="ops-table__name">{item.title}</span>
                          <span className="ops-table__id">{item.code}</span>
                        </th>
                        <td>
                          {who.name}
                          <span className="ops-table__id">{who.role}</span>
                        </td>
                        <td className={bucket === "overdue" && (item.status === "todo" || item.status === "doing") ? "ops-work__due ops-work__due--late" : undefined}>
                          <time dateTime={item.due}>{formatViDate(item.due)}</time>
                          {bucket === "today" ? <span className="ops-table__id">Hôm nay</span> : null}
                        </td>
                        <td>{item.courseName ?? "—"}</td>
                        <td>
                          <StatusChip tone={chip.tone}>{chip.label}</StatusChip>
                        </td>
                        <td onClick={(event) => event.stopPropagation()}>
                          <div className="ops-table__acts">
                            <button type="button" className="ops-table__detail" onClick={() => pickTask(item.id)}>
                              Chi tiết
                            </button>
                            <MoreMenu
                              items={[
                                { label: "Copy mã", onClick: () => copyId(item.code) },
                                {
                                  label: "Đánh dấu xong",
                                  onClick: () => patch(item.id, { status: "done" }),
                                },
                              ]}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {filtered.length === 0 ? <p className="ops-table-empty">Không có việc khớp bộ lọc.</p> : null}
            </div>

            <div className="ops-table-foot">
              <p>
                {filtered.length === 0
                  ? "0 việc"
                  : `${pageSafe * PAGE_SIZE + 1}–${Math.min(filtered.length, pageSafe * PAGE_SIZE + PAGE_SIZE)} / ${filtered.length}`}
              </p>
              <div className="ops-pager">
                <button type="button" disabled={pageSafe <= 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>
                  Trước
                </button>
                {Array.from({ length: pageCount }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={i === pageSafe ? "ops-pager__on" : undefined}
                    aria-current={i === pageSafe ? "page" : undefined}
                    onClick={() => setPage(i)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={pageSafe >= pageCount - 1}
                  onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
                >
                  Sau
                </button>
              </div>
            </div>
          </div>
        </div>

        <aside className="ops-work__aside">
          {adding ? (
            <section className="ops-detail ops-work__detail" aria-labelledby="edu-task-add">
              <div className="ops-detail__head">
                <div className="ops-detail__head-title">
                  <h2 id="edu-task-add">Việc mới</h2>
                </div>
                <button type="button" className="ops-detail__close" aria-label="Đóng" onClick={closePanel}>
                  ×
                </button>
              </div>
              <form
                className="ops-work__form"
                onSubmit={(event) => {
                  event.preventDefault();
                  addTask();
                }}
              >
                <label>
                  Tiêu đề
                  <input value={draftTitle} onChange={(e) => setDraftTitle(e.target.value)} required />
                </label>
                <label>
                  Người nhận
                  <select value={draftAssignee} onChange={(e) => setDraftAssignee(e.target.value)}>
                    {TASK_ASSIGNEES.map((row) => (
                      <option key={row.id} value={row.id}>
                        {row.name} · {row.role}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Hạn
                  <input type="date" value={draftDue} onChange={(e) => setDraftDue(e.target.value)} required />
                </label>
                <label>
                  Mô tả
                  <textarea rows={4} value={draftDetail} onChange={(e) => setDraftDetail(e.target.value)} />
                </label>
                <button className="ops-page__cta" type="submit">
                  Tạo việc
                </button>
              </form>
            </section>
          ) : selected ? (
            <section className="ops-detail ops-work__detail" aria-labelledby="edu-task-detail">
              <div className="ops-detail__head">
                <div className="ops-detail__head-title">
                  <h2 id="edu-task-detail">{selected.title}</h2>
                  <StatusChip tone={workTaskChip(selected.status).tone}>{workTaskChip(selected.status).label}</StatusChip>
                </div>
                <button type="button" className="ops-detail__close" aria-label="Đóng chi tiết" onClick={closePanel}>
                  ×
                </button>
              </div>
              <p className="ops-staff__meta-line">
                {selected.code} · {assigneeById(selected.assigneeId).name}
              </p>
              <div className="ops-detail__tabs" role="tablist" aria-label="Chi tiết việc">
                {(
                  [
                    ["overview", "Tổng quan"],
                    ["update", "Cập nhật"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    className={detailTab === id ? "ops-detail__tab ops-detail__tab--on" : "ops-detail__tab"}
                    aria-selected={detailTab === id}
                    onClick={() => setDetailTab(id)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {detailTab === "overview" ? (
                <dl className="ops-info__dl">
                  <div>
                    <dt>Hạn</dt>
                    <dd>
                      <time dateTime={selected.due}>{formatViDate(selected.due)}</time>
                    </dd>
                  </div>
                  <div>
                    <dt>Người nhận</dt>
                    <dd>
                      {assigneeById(selected.assigneeId).name} · {assigneeById(selected.assigneeId).role}
                    </dd>
                  </div>
                  <div>
                    <dt>Khóa / lớp</dt>
                    <dd>{selected.courseName ?? "—"}</dd>
                  </div>
                  <div>
                    <dt>Mô tả</dt>
                    <dd>{selected.detail}</dd>
                  </div>
                </dl>
              ) : (
                <div className="ops-work__form">
                  <label>
                    Trạng thái
                    <select
                      value={selected.status}
                      onChange={(e) => patch(selected.id, { status: e.target.value as StudioTaskStatus })}
                    >
                      {STATUSES.map((id) => (
                        <option key={id} value={id}>
                          {TASK_STATUS_LABEL[id]}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Người nhận
                    <select value={selected.assigneeId} onChange={(e) => patch(selected.id, { assigneeId: e.target.value })}>
                      {TASK_ASSIGNEES.map((row) => (
                        <option key={row.id} value={row.id}>
                          {row.name} · {row.role}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Hạn
                    <input type="date" value={selected.due} onChange={(e) => patch(selected.id, { due: e.target.value })} />
                  </label>
                  <p className="ops-page__lede">Đổi xong là lưu trên canvas. Demo FE, chưa server.</p>
                </div>
              )}
            </section>
          ) : (
            <p className="ops-table-empty">Chọn một việc hoặc thêm việc mới.</p>
          )}
        </aside>
      </div>
    </section>
  );
}
