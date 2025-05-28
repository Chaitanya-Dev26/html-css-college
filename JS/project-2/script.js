let count = 0;

const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
  countDisplay.textContent = count;
  if (count === 0) {
    countDisplay.style.color = "#000";
  } else if (count > 0) {
    countDisplay.style.color = "#4caf50";
  } else {
    countDisplay.style.color = "#f44336";
  }
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});
