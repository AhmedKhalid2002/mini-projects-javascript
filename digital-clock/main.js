const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const periodElement = document.querySelector('.period');
const celenderElement = document.querySelector('.calender');
setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const period = hour > 12 ? 'Pm' : 'Am';
  hourElement.innerHTML = String(hour).padStart(2, '0');
  minuteElement.innerHTML = String(min).padStart(2, '0');
  secondElement.innerHTML = String(sec).padStart(2, '0');
  periodElement.innerHTML = period;
}, 1000);

celenderElement.innerHTML = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year:'numeric',
  dayPeriod:'long',
}).format(new Date());
