// HTML要素を定数に代入
const btn = document.getElementById('btn');
const message = document.getElementById('message');
const parentList = document.getElementById('parent-list');

btn.addEventListener('click', () => {
  const childList = document.createElement('li');
  childList.textContent = 'ボタンをクリックしました';
  parentList.appendChild(childList);
});