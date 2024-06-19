window.onload = function () {
  const number = [];
  let count = 0;
  while (number.length < 3) {
    const random = Math.floor(Math.random() * 9) + 1;
    if (!number.includes(random)) {
      number.push(random);
    }
  }

  console.log(`   ⚾️   숫자야구게임   ⚾️   
    1. 컴퓨터는 임이의 숫자 3가지를 생성합니다.
    2. 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
    3. 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
     - 숫자의 값과 위치가 모두 일치하면 S
     - 숫자의 값은 일치하지만 위치가 틀렸으면 B
    4. 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
    5. 사용자가 중복되는 숫자를 입력하는 경우, 재입력을 요구합니다.
    6. 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.`);
  checkAnswer(number, count);
};

function enterAnswer() {
  const answer = prompt("숫자를 입력해주세요.");
  if (answer.length !== 3) {
    alert("세자리 숫자를 입력해주세요.");
    enterAnswer();
  }
  const answerArr = answer.split("");
  if (
    answerArr[0] === answerArr[1] ||
    answerArr[1] === answerArr[2] ||
    answerArr[0] === answerArr[2]
  ) {
    alert("중복되지 않는 숫자를 입력해주세요.");
    enterAnswer();
  }
  return answerArr;
}

function checkAnswer(number, count) {
  const answer = enterAnswer();
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i++) {
    if (number[i] === Number(answer[i])) {
      strike++;
    } else if (number.includes(Number(answer[i]))) {
      ball++;
    }
  }
  if (strike === 3) {
    alert(`정답입니다. ${count}번만에 맞추셨습니다.`);
  } else {
    alert(`${strike}S ${ball}B`);
    count++;
    checkAnswer(number, count);
  }
}
