function solution(n){
    return [...n.toString()].map(v=> Number(v)).reduce((a,c)=> a+c,0)
}