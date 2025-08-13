function solution(balls, share) {
  // BigInt를 사용하여 큰 숫자 계산
  let numerator = BigInt(1);
  let denominator = BigInt(1);

  // 분자 (n * (n-1) * ... * (n-r+1))
  for (let i = 0; i < share; i++) {
    numerator *= BigInt(balls - i);
  }

  // 분모 (r * (r-1) * ... * 1)
  for (let i = 1; i <= share; i++) {
    denominator *= BigInt(i);
  }

  // 나눗셈 후 Number 타입으로 변환하여 반환
  return Number(numerator / denominator);
}