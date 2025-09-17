// 백준 문제 풀이 템플릿
const fs = require('fs');

// 백준에서는 '/dev/stdin' 경로에서 입력을 받습니다.
// 로컬에서 테스트할 경우, input.txt 파일을 읽어들입니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
const num = input[1].split(' ').map(Number);
const V = Number(input[2]);

let count = 0;
for (const element of num) {
  if (element === V) {
    count++;
  }
}
console.log(count);

// console.log(num.filter(v => v === V).length);
