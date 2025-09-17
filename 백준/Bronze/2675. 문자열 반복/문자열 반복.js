// 백준 문제 풀이 템플릿
const fs = require('fs');

// 백준에서는 '/dev/stdin' 경로에서 입력을 받습니다.
// 로컬에서 테스트할 경우, input.txt 파일을 읽어들입니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i <= input.length - 1; i++) {
  let result = '';
  const arr = input[i].split(' ');
  const num = Number(arr[0]);
  const array = arr[1].split('');
  for (let j = 0; j < array.length; j++) {
    result += array[j].repeat(num);
  }
  console.log(result);
}
