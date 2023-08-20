function solution(number) {
    return [...number].map(v=>+v).reduce((a,c)=>a+c)%9
}