function solution(numbers) {
  const frequency = {};
  let maxFrequency = 0;
  let modes = [];

  // 숫자의 빈도수 계산
  for (const number of numbers) {
    if (frequency[number] !== undefined) {
      frequency[number]++;
    } else {
      frequency[number] = 1;
    }
  }
console.log(frequency)
  // 최대 빈도수 찾기
  for (const number in frequency) {
    if (frequency[number] > maxFrequency) {
      maxFrequency = frequency[number];
    }
  }

  // 최대 빈도수를 가진 숫자(들) 찾기
  for (const number in frequency) {
    if (frequency[number] === maxFrequency) {
      modes.push(Number(number));
    }
  }

  // 최빈값이 여러 개인 경우 -1 반환, 하나인 경우 그 값을 반환
  return modes.length === 1 ? modes[0] : -1;
}