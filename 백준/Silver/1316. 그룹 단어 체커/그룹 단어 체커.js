// 백준 문제 풀이 템플릿
const fs = require('fs');

// 백준에서는 '/dev/stdin' 경로에서 입력을 받습니다.
// 로컬에서 테스트할 경우, input.txt 파일을 읽어들입니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 파일 전체를 읽어와 문자열로 변환하고, 줄바꿈으로 나눕니다.
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = input[0];
const words = input.slice(1);

let groupWordCount = 0;

function isGroupWord(word) {
  const appeared = new Set();
  let prevChar = '';

  for (const char of word) {
    if (prevChar !== char) {
      if (appeared.has(char)) {
        return false;
      }
      appeared.add(char);
    }
    prevChar = char;
  }

  return true;
}

for (const word of words) {
  if (isGroupWord(word)) {
    groupWordCount++;
  }
}
console.log(groupWordCount);


// for 문
// 알파벳을 lastAlphabet에 넣고
//그 다음 문자와 비교
// 근데 만약 없으면 set에 넣고
// 있으면 그냥 스킵
