const ADVICENUM = document.getElementById('adviceNumber');
const ADVICE = document.getElementById('advice');
const DICEBTN = document.getElementById('dice');

async function change(){
  const res = await fetch("https://api.adviceslip.com/advice");
  const answer = await res.json();
  ADVICENUM.innerText = answer["slip"]["id"];
  ADVICE.innerText = `"`+answer["slip"]["advice"]+`"`;
}

DICEBTN.addEventListener('click', change)