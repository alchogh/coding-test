// 백준 문제 풀이 템플릿
const fs = require('fs');

// 백준에서는 '/dev/stdin' 경로에서 입력을 받습니다.
// 로컬에서 테스트할 경우, input.txt 파일을 읽어들입니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = input[0].split(' ').map(Number)[1];

const num = input[1].split(' ').map(Number);

const arr = [];
for (const ele of num) {
  if (ele < N) {
    arr.push(ele);
  }
}
console.log(arr.join(' '));
