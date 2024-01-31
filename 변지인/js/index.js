const ADVICENUM = document.getElementById('adviceNumber');
const ADVICE = document.getElementById('advice');
const DICEBTN = document.getElementById('dice');
const TEXTBOX = document.getElementById('text');
const LOADINGBOX = document.getElementById('loading');

async function change(){
  // 로딩 화면 표시
  LOADINGBOX.style.display = 'block';
  TEXTBOX.style.display = 'none';

  // 2초 동안 대기
  await new Promise(resolve => setTimeout(resolve, 2000));

  // API에서 새로운 조언 가져오기
  const res = await fetch("https://api.adviceslip.com/advice");
  const answer = await res.json();
  ADVICENUM.innerText = answer["slip"]["id"];
  ADVICE.innerText = `"${answer["slip"]["advice"]}"`;

  // 새로운 조언 표시 후 로딩 화면 숨기기
  LOADINGBOX.style.display = 'none';
  TEXTBOX.style.display = 'block';
}

DICEBTN.addEventListener('click', change);