function solution(n) {
    const odd = Array(~~(n/2) +1).fill(1).map((v,i)=>v+i*2).reduce((a,c)=>a+c,0)
    const even = Array(~~(n/2)+1).fill(0).map((v,i)=>(v+i*2)*(v+i*2)).reduce((a,c)=>a+c,0)
    return n%2===1 ?odd :even
}