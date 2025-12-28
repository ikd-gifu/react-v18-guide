// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

const a = "0";
let result = a ? 10 : -10;
console.log(result);

const falsy = 0;
const truthy = 1;
console.log(Boolean(truthy));
console.log(Boolean(falsy));

// 論理積 (&&) について
const resultA = "" && "foo";
const resultB = 2 && 1 && 0 && 3;
const resultC = "foo" && 4;

// 左から順に評価していき、「最初に見つかった falsy の値」を返す。
// もし最後まで falsy が見つからなければ、「最後の値」を返す。
// 単に true / false を返すわけではない。
console.log(resultA); // ""
console.log(resultB); // 0
console.log(resultC); // 4

// 理論和 (||) について
const resultD = "" || "foo";
const resultE = 0 || 2 || 0;
const resultF = "foo" || 4;

// A || B は && と逆のイメージで動きます。
// 左から順に評価していき、「最初に見つかった truthy の値」を返す。
// もし最後まで truthy が見つからなければ、「最後の値」を返す。
console.log(resultD); // "foo"
console.log(resultE); // 2
console.log(resultF); // "foo"
