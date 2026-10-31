document.addEventListener("DOMContentLoaded", () => {
  // Update year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Update domain display based on current window location
  const domainEl = document.getElementById("domain-display");
  if (domainEl && window.location.hostname) {
    domainEl.textContent = window.location.hostname;
  }

  // Update protocol
  const protocolEl = document.getElementById("protocol-display");
  if (protocolEl) {
    protocolEl.textContent = window.location.protocol.replace(":", "").toUpperCase();
  }

  // Live client clock
  const timeEl = document.getElementById("client-time");
  function updateTime() {
    if (timeEl) {
      timeEl.textContent = new Date().toLocaleTimeString();
    }
  }
  updateTime();
  setInterval(updateTime, 1000);

  // Simple interactive counter
  let count = 0;
  const counterVal = document.getElementById("counter-value");
  const btnIncrement = document.getElementById("btn-increment");
  const btnReset = document.getElementById("btn-reset");

  if (btnIncrement && counterVal) {
    btnIncrement.addEventListener("click", () => {
      count += 1;
      counterVal.textContent = count;
    });
  }

  if (btnReset && counterVal) {
    btnReset.addEventListener("click", () => {
      count = 0;
      counterVal.textContent = count;
    });
  }
});
