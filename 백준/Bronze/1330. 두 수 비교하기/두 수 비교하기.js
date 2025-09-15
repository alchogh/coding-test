// 백준 1000번: Hello World
const fs = require('fs');

// 백준에서는 '/dev/stdin' 경로에서 입력을 받습니다.
// 로컬에서 테스트할 경우, input.txt 파일을 읽어들입니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 파일 전체를 읽어와 문자열로 변환하고, 줄바꿈으로 나눕니다.
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(data) {
  const [a, b] = data;
  if (a < b) {
    return '<';
  } else if (a === b) {
    return '==';
  } else {
    return '>';
  }
}

console.log(solution(input));
