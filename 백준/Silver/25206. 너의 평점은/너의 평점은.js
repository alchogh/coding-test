// 백준 문제 풀이 템플릿
const fs = require('fs');

// 백준에서는 '/dev/stdin' 경로에서 입력을 받습니다.
// 로컬에서 테스트할 경우, input.txt 파일을 읽어들입니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 파일 전체를 읽어와 문자열로 변환하고, 줄바꿈으로 나눕니다.
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const gradeMap = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalGradePoints = 0; // (학점 × 과목평점)의 합
let totalCredits = 0; // 학점의 총합

for (const line of input) {
  const [subject, creditStr, grade] = line.split(' ');

  if (grade === 'P') {
    continue;
  }

  const credit = parseFloat(creditStr);
  const gradePoint = gradeMap[grade];

  totalCredits += credit;
  totalGradePoints += credit * gradePoint;
}
const majorGPA = totalGradePoints / totalCredits;
console.log(majorGPA);
