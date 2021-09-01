const currentValue = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let count = 0;

function increment() {
  count += 1;
  currentValue.textContent = count;
}
function decrement() {
  count -= 1;
  currentValue.textContent = count;
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);