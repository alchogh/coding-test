// 백준 문제 풀이 템플릿
const fs = require('fs');

// 백준에서는 '/dev/stdin' 경로에서 입력을 받습니다.
// 로컬에서 테스트할 경우, input.txt 파일을 읽어들입니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 파일 전체를 읽어와 문자열로 변환하고, 줄바꿈으로 나눕니다.
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 이제 input 배열에 문제의 입력값이 줄마다 들어있습니다.
// 이 아래에 문제 풀이 코드를 작성하면 됩니다.

// 예시: 첫 번째 줄에서 두 정수 A, B를 읽어와서 더한 결과를 출력

for (let i = 0; i < input.length - 1; i++) {
  const num = input[i].split(' ').map(Number);
  console.log(num[0] + num[1]);
}
