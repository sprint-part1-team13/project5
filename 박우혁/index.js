const adviceId = document.querySelector('#adviceId');
const advice = document.querySelector('.advice');
const dice = document.querySelector('.dice');
const loadingBar = document.querySelector('.loadingBar');
const text = document.querySelector('.text');

dice.addEventListener('click', bringAdvice);

async function bringAdvice() {
  text.style.display = 'none';
  loadingBar.style.display = 'block';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const result = await response.json();
    const { id, advice: newAdvice } = await result.slip;
    adviceId.textContent = id;
    advice.textContent = `"${newAdvice}"`;
  } catch {
    (e) => {
      erorr;
    };
  } finally {
    text.style.display = 'flex';
    loadingBar.style.display = 'none';
  }
}
