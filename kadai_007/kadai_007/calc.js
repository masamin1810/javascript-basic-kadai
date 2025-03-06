//numは１５です
let num = 15;

// 変数num値出力（確認用）
console.log(num);

// 変数numの値が１５のとき「3と5の倍数です」と出力
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
} 

// 変数numが３の倍数なら「３の倍数です」と出力
if (num % 3 === 0) {
  console.log('3の倍数です');
}

// 変数numが５の倍数なら「５の倍数です」と出力
if (num % 5 === 0) {
  console.log('5の倍数です');
}

// それ以外のときはそのままの数を表示
else {
    console.log(num);
}