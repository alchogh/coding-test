// 백준 1000번: Hello World
const fs = require('fs');

// 백준에서는 '/dev/stdin' 경로에서 입력을 받습니다.
// 로컬에서 테스트할 경우, input.txt 파일을 읽어들입니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// 파일 전체를 읽어와 문자열로 변환하고, 줄바꿈으로 나눕니다.
const input = fs.readFileSync(filePath).toString().trim();
const numbers = input.split(' ').map(Number);

function solution(A, B, C) {
  const result1 = (A + B) % C;
  const result2 = ((A % C) + (B % C)) % C;
  const result3 = (A * B) % C;
  const result4 = ((A % C) * (B % C)) % C;
  return [result1, result2, result3, result4];
}

const results = solution(...numbers);

console.log(results.join('\n'));
