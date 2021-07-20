let orange = 100;
let apple = 120;

if (orange < apple) {
  alert('みかんの値段がりんごより安い')
} else if (orange == apple) {
  alert('みかんとりんごが同じ値段')
} else {
  alert('みかんの値段がりんごより高い')
}

let max = 100;
let num = 2;
let count = 0;

while (num < max) {
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


let i;
let k = 0;

for (i = 1; i < 11; i++) {
  k = k + i;
}

alert('1から10まで足し算した結果は' + k + 'です');

let number1 = 4
let number2 = 2

alert('足し算では' + [number1 + number2] + '、引き算では' + [number1 - number2] + '、掛け算では' + [number1 * number2] + '、割り算では' + [number1 / number2])