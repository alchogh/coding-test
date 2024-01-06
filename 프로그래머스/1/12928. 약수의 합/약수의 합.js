function solution(n) {
    const arr = Array(n).fill(1).map((v,i)=>v+i)
    const filterArr = arr.filter(v=> n%v===0)
    return filterArr.reduce((a,c)=>a+c,0)
}