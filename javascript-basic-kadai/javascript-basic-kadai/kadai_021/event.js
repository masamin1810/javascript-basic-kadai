//HTML要素を定数に代入
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const message = document.getElementById('message')

btn.addEventListener('clyck', () => {

});

// 同期処理実行
console.log('btn');
console.log('text');
// 2秒（2000ミリ秒）待ち時間設定,非同期処理実行
setTimeout(() => {
    console.log('message');
  }, 2000);
  message.textContent = 'ボタンをクリックしました';
  