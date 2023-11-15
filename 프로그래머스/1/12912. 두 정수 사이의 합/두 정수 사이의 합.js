function solution(a, b) {
    return a>=b ? Array(a-b+1).fill(b).map((v,i)=>v+i).reduce((a,c)=>a+c) : Array(b-a+1).fill(a).map((v,i)=>v+i).reduce((a,c)=>a+c)
}