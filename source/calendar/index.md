---
title: 活动日历
date: 2025-12-02 12:00:00
type: page
layout: page
comments: false
aside: false
---

<script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.min.js'></script>
<script src="/calendar/calendar.js"></script>

<div id='calendar'></div>

<style>
  #calendar {
    max-width: 1100px;
    margin: 0 auto;
    padding: 10px;
    background: var(--efu-card-bg);
    border-radius: 8px;
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
</style>
