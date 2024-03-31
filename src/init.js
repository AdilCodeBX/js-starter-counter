const count = document.getElementById('count');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');

const reset = document.getElementById('reset');

increase.addEventListener('click', () => {
  count.innerHTML++;
});

decrease.addEventListener('click', () => {
  count.innerHTML--;
});

reset.addEventListener('click', () => {
  count.innerHTML = 0;
});
