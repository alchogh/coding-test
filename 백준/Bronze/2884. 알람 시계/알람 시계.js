// 백준 1000번: Hello World
const fs = require('fs');

// 백준에서는 '/dev/stdin' 경로에서 입력을 받습니다.
// 로컬에서 테스트할 경우, input.txt 파일을 읽어들입니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 파일 전체를 읽어와 문자열로 변환하고, 줄바꿈으로 나눕니다.
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let [H, M] = input;

M -= 45;

if (M < 0) {
  H -= 1;
  M += 60;
}

if (H < 0) {
  H = 23;
}

console.log(H, M);
