const subject = document.getElementById('subject');
const timer = document.getElementById('timer');
const form = document.forms.typing;
const textList = [
  'Hello World',
  'Good',
  'I love JavaScript',
  'This is MyApp',
  'Welcome'
];
 
let TIME = 20;
let count = 0;
let state = true;
 
const countdown = setInterval(function() {
  timer.textContent = '制限時間：' + --TIME + '秒';
  if(TIME <= 0) finish();
}, 1000);
 
 
form.btn.addEventListener('click', function(e) {
  if(!state) return;
 
  if(form.input.value === subject.textContent) {
    count++;
    init();
  } else {
    subject.textContent = '間違いです！';
    setTimeout(function(){ init() },1000)
  }
});
 
init();
 
function init() {
  const rnd = Math.floor(Math.random() * textList.length);
 
  subject.textContent = textList[rnd];
  form.input.value = '';
  form.input.focus();
}
 
function finish() {
  clearInterval(countdown);
  subject.textContent = '正解数は' + count + '個でした！';
  state = false;
}
