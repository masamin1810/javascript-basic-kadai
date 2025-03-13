// HTML要素を定数に代入
const btn = document.getElementById('btn');
const message = document.getElementById('message');
const parentList = document.getElementById('parent-list');
//定数を使って動きをつける
btn.addEventListener('click', () => {
  const childList = document.createElement('li');
  message.innerHTML = '<h2>ボタンをクリックしました</h2>';
  parentList.appendChild(childList);
});