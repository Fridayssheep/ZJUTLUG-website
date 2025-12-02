function initCalendar() {
  var calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'zh-cn',
    height: 'auto',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listMonth'
    },
    buttonText: {
      today: '今天',
      month: '月视图',
      list: '列表'
    },
    events: '/calendar/events.json',
    eventClick: function(info) {
      if (info.event.url) {
        info.jsEvent.preventDefault();
        if (window.pjax) {
            window.pjax.loadUrl(info.event.url);
        } else {
            window.location.href = info.event.url;
        }
      }
    }
  });
  calendar.render();
}

document.addEventListener('DOMContentLoaded', initCalendar);
document.addEventListener('pjax:complete', initCalendar);
