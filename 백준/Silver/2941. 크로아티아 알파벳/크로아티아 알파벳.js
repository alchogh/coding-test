// 백준 문제 풀이 템플릿
const fs = require('fs');

// 백준에서는 '/dev/stdin' 경로에서 입력을 받습니다.
// 로컬에서 테스트할 경우, input.txt 파일을 읽어들입니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 파일 전체를 읽어와 문자열로 변환하고, 줄바꿈으로 나눕니다.
let input = fs.readFileSync(filePath).toString().trim();

const croatianAlphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (const alphabet of croatianAlphabets) {
  const regex = new RegExp(alphabet, 'g');
  input = input.replace(regex, '*');
}
console.log(input.length);
