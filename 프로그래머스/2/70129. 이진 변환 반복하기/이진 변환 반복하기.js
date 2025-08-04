function solution(s) {
  let count = 0;       // 변환 횟수
  let removed = 0;     // 제거한 0의 개수 누적

  while (s !== "1") {
    const zeros = (s.match(/0/g) || []).length;  // 현재 문자열에서 0의 개수
    removed += zeros;                            // 누적
    s = s.replace(/0/g, "");                     // 0 제거
    s = s.length.toString(2);                    // 남은 길이를 2진수 문자열로 변환
    count++;                                     // 횟수 증가
  }

  return [count, removed];
}
