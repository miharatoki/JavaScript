// let orange = 100;
// let apple = 120;

// if (orange < apple) {
//   alert('みかんの値段がりんごより安い')
// } else if (orange == apple) {
//   alert('みかんとりんごが同じ値段')
// } else {
//   alert('みかんの値段がりんごより高い')
// }

// let max = 100;
// let num = 2;
// let count = 0;

// while (num < max) {
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// let i;
// let k = 0;

// for (i = 1; i < 11; i++) {
//   k = k + i;
// }

// alert('1から10まで足し算した結果は' + k + 'です');


// let number1 = 4
// let number2 = 2

// alert('足し算では' + [number1 + number2] + '、引き算では' + [number1 - number2] + '、掛け算では' + [number1 * number2] + '、割り算では' + [number1 / number2])


// let alertString;
// alertString = addString("WebECamp");

// alert(alertString);

// function addString(strA) {
//   let addStr = "Hello " + strA;
//   return addStr;
// }


// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)) {
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

if (user_hand != null) {
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

// ランダムでじゃんけんの手を作成する関数
function getJShand() {
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand_name;

  if (js_hand_num == 0) {
    hand_name = "グー";
  } else if (js_hand_num == 1) {
    hand_name = "チョキ";
  } else if (js_hand_num == 2) {
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js) {
  let winLoseStr;

  if (user == "グー") {
    if (js == "グー") {
      winLoseStr = "あいこ";
    } else if (js == "チョキ") {
      winLoseStr = "勝ち";
    } else if (js == "パー") {
      winLoseStr = "負け";
    }
  } else if (user == "チョキ") {
    if (js == "グー") {
      winLoseStr = "負け";
    } else if (js == "チョキ") {
      winLoseStr = "あいこ";
    } else if (js == "パー") {
      winLoseStr = "勝ち";
    }
  } else if (user == "パー") {
    if (js == "グー") {
      winLoseStr = "勝ち";
    } else if (js == "チョキ") {
      winLoseStr = "負け";
    } else if (js == "パー") {
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}