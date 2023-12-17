import { Notify } from 'notiflix/build/notiflix-notify-aio';
document.querySelector('.form').addEventListener('submit', onFormSubmit);
const firstDelay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

function onFormSubmit(evt) {
  evt.preventDefault();
  const firstDelayValue = Number(firstDelay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);
  checkAmount(firstDelayValue, stepValue, amountValue);
}

function checkAmount(firstDelay, step, amount) {
  for (let i = 0; i < amount; i += 1) {
    const currentDelay = firstDelay + i * step;
    createPromise(i + 1, currentDelay)
      .then(success => Notify.success(success))
      .catch(error => Notify.failure(error));
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve)
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      else reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

// ==========================================================

// const form = document.querySelector('form');
// // console.log(form);

// form.addEventListener('submit', handlerSubmit);

// function handlerSubmit(evt) {
//   preventDefault();
//   let delay = Number(evt.currentTarget.elements.delay.value);
//   const step = Number(evt.currentTarget.elements.step.value);
//   const amount = Number(evt.currentTarget.elements.amount.value);
//   console.log(delay);
//   for (let i = 1; i <= amount; i += 1) {
//     createPromise(i, delay)
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     delay += step;
//   }
// }

// function createPromise(position, delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         res({ position, delay });
//       } else {
//         rej({ position, delay });
//       }
//     }, delay);
//   });
// }
