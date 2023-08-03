function solution(n, k) {
const array = Array(n).fill(1).map((v,i)=>v+i)
    return array.filter(v=>v%k===0)
}