---
title: 活动日历
date: 2025-12-02 12:00:00
type: page
layout: page
comments: false
aside: false
---

<script src="/calendar/calendar.js"></script>

<div id='calendar'></div>

<style>
  #calendar {
    max-width: 1100px;
    margin: 0 auto;
    padding: 10px;
    background: var(--efu-card-bg);
    border-radius: 8px;
    min-height: 60vh;
  }
  
  /* 适配 Solitude 主题变量 */
  :root {
    --fc-border-color: var(--efu-border-color, #ddd);
    --fc-button-bg-color: var(--efu-main, #3b82f6);
    --fc-button-border-color: var(--efu-main, #3b82f6);
    --fc-button-hover-bg-color: var(--efu-main-op, #60a5fa);
    --fc-button-hover-border-color: var(--efu-main-op, #60a5fa);
    --fc-button-active-bg-color: var(--efu-main-op-deep, #2563eb);
    --fc-button-active-border-color: var(--efu-main-op-deep, #2563eb);
    --fc-event-bg-color: var(--efu-main, #3b82f6);
    --fc-event-border-color: var(--efu-main, #3b82f6);
    --fc-today-bg-color: var(--efu-secondbg, #f1f5f9);
  }

  .fc .fc-toolbar-title {
    color: var(--efu-fontcolor);
  }

  .fc .fc-col-header-cell-cushion,
  .fc .fc-daygrid-day-number {
    color: var(--efu-fontcolor);
    text-decoration: none;
  }
  
  .fc-theme-standard td, .fc-theme-standard th {
    border-color: var(--efu-card-border);
  }
  
  /* 列表视图样式微调 */
  .fc-list-day-cushion {
    background-color: var(--efu-secondbg) !important;
  }
  .fc-list-event:hover td {
    background-color: var(--efu-secondbg) !important;
  }
  
  /* 修复手机端月视图可能白屏或高度塌陷的问题 */
  .fc-view-harness {
    min-height: 400px;
  }
  
  /* 确保日历表格在移动端能正常撑开 */
  .fc .fc-scrollgrid-section-body table,
  .fc .fc-scrollgrid-section-footer table {
    width: 100% !important;
  }

  /* 修复 Solitude 主题对 table 的全局样式干扰 */
  #calendar table {
    display: table !important;
    width: 100% !important;
    margin: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    border-collapse: collapse !important;
  }
  
  #calendar td, #calendar th {
    padding: 0 !important;
    vertical-align: top !important;
    border: 1px solid var(--fc-border-color, #ddd);
  }
  
  /* 修复表头样式 */
  .fc-theme-standard th {
    border: 1px solid var(--fc-border-color, #ddd);
  }

  /* 移动端适配：缩小字体和按钮 */
  @media (max-width: 768px) {
    .fc .fc-toolbar-title {
      font-size: 1.2rem !important;
    }
    .fc .fc-button {
      padding: 4px 8px !important;
      font-size: 0.85rem !important;
      line-height: 1.2 !important;
    }
    .fc .fc-toolbar.fc-header-toolbar {
      margin-bottom: 10px !important;
      flex-wrap: wrap;
      gap: 5px;
    }
    /* 让工具栏元素在小屏幕上更紧凑 */
    .fc .fc-toolbar-chunk {
      display: flex;
      align-items: center;
    }
  }
</style>
