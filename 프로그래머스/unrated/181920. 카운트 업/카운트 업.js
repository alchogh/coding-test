function solution(start, end) {
 const length = end - start + 1;
  return  Array(length).fill().map((_, index) => start + index);
}