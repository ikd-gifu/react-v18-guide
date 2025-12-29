// 非同期処理（Promise）
let a = 0;
console.log(a);

new Promise ((resolve, reject) => {
setTimeout(() => {
  a = 1;
  resolve(a)
  // reject(a)
}, 2000);
}).then((b) => { //resolveの引数がbに入る
  console.log(b);
  return b;
}).then((b) => { //returnがbに入る
  console.log(b);
}).catch((c) => {{ // rejectの引数がcに入る
  console.log('catchが実行されました', c);
}});
