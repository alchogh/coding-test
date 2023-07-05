function solution(i, j, k) {
   return Array(j-i+1).fill(i).map((a,b)=>a+b).join('').split(k).length-1
}