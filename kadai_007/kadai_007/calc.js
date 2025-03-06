// 変数numに0～15までのランダムな整数を代入する
let num = Math.floor(Math.random() * 15) + 1;

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が3と5の倍数であれば「3と5の倍数です」という文字列を出力する
if (num % 3 === 0 && num % 5 === 0) { 
  console.log('3と5の倍数です');
}

// 変数numが３の倍数なら「３の倍数です」という文字列を出力する
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

// 変数numが５の倍数なら「５の倍数です」という文字列を出力する
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

// それ以外のときはそのままの数を表示
else {
  console.log(num);
}
