// 백준 1000번: A+B
const fs = require('fs');

// 백준에서는 '/dev/stdin' 경로에서 입력을 받습니다.
// 로컬에서 테스트할 경우, input.txt 파일을 읽어들입니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 파일 전체를 읽어와 문자열로 변환하고, 줄바꿈으로 나눕니다.
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 첫 번째 줄에서 두 정수 A, B를 읽어와서 더한 결과를 출력
const [A, B] = input[0].split(' ').map(Number);
console.log(A + B);