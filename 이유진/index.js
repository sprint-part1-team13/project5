const dice = document.querySelector('.dice')
const h1 = document.querySelector('h1')
const adviceMsg = document.querySelector('.advice')

function callAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json())
  .then((result) => {
    let {slip} = result
    let {id, advice} = slip
    console.log(id, advice)
    h1.textContent = `Advice #${id}`
    adviceMsg.textContent = `"${advice}"`
  })
}

dice.addEventListener('click', callAdvice)