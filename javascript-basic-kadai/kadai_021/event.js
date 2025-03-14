//HTML要素を定数に代入
const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  // 2秒（2000ミリ秒）待ち時間設定,非同期処理実行
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);

});
