// 백준 문제 풀이 템플릿
const fs = require('fs');

// 백준에서는 '/dev/stdin' 경로에서 입력을 받습니다.
// 로컬에서 테스트할 경우, input.txt 파일을 읽어들입니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 파일 전체를 읽어와 문자열로 변환하고, 줄바꿈으로 나눕니다.
const input = fs.readFileSync(filePath).toString().trim().toUpperCase();
const arr = input.split('');
const map = new Map();

for (const ele of arr) {
  map.set(ele, (map.get(ele) || 0) + 1);
}

let maxCount = 0;
let maxChar = '?';

// 3. Map을 순회하며 가장 많이 나온 알파벳 찾기
for (let [char, count] of map) {
  if (count > maxCount) {
    maxCount = count;
    maxChar = char;
  } else if (count === maxCount) {
    // 가장 많이 사용된 알파벳이 여러 개일 경우 '?'로 변경
    maxChar = '?';
  }
}

console.log(maxChar);
