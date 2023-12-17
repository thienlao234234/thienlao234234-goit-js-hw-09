const refs = {
  bodyColor: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
// ===========================================
refs.btnStop.disabled = true;
let timerId = null;

refs.btnStart.addEventListener('click', () => {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
  timerId = setInterval(() => {
    refs.bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.btnStop.addEventListener('click', () => {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;

  clearInterval(timerId);
});
// ===========================================
// console.dir(refs.btnStart);
// console.log(refs.btnStop);
// console.dir(refs.bodyColor.style.backgroundColor);
// ===========================================
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());
