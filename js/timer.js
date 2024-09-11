function discountCountdown(duration) {
  const display = document.querySelector('.discount-timer');
  let timer = duration;

  function updateTimer() {
    const hours = String(Math.floor(timer / 3600)).padStart(1, '0');
    const minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');

    display.textContent = `${hours}:${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(interval);
    }
  }

  updateTimer();
  const interval = setInterval(updateTimer, 1000);
}

discountCountdown(7200);
