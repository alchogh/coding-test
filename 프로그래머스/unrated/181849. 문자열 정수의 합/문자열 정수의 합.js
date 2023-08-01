function solution(num_str) {
   return Array.from(num_str).map(Number).reduce((a,c)=>a+c,0)
}