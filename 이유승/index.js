const diceContainer = document.querySelector('.diceContainer');
const h1 = document.querySelector('h1');
const message = document.querySelector('.advice');
const loader = document.querySelector('.loader');

async function getAdvice() {
  try {
    loader.style.display = 'block';

    const response = await fetch('https://api.adviceslip.com/advice');
    const result = await response.json();
    
    const { slip } = result;
    const { id, advice } = slip;

    console.log(id, advice);
    h1.textContent = `Advice #${id}`;
    message.textContent = `"${advice}"`;
  } catch (error) {
    console.error('Error fetching advice:', error);
  } finally {
    loader.style.display = 'none';
  }
}

diceContainer.addEventListener('click', getAdvice);