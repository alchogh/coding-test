function solution(n, k) {
    return Array(n-k+1).fill(k).map((v,i)=>v+i).filter(v=> v%k===0)
}