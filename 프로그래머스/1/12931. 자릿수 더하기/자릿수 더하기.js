function solution(n) {
    return n.toString().split('').map(v=>Number(v)).reduce((a,c)=>a+c)
}