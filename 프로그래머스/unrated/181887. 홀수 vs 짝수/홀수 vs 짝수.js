function solution(num_list) {
    const a =num_list.filter((v,i)=> i%2===0).reduce((a,c)=>a+c)
    const b = num_list.filter((v,i)=> i%2===1).reduce((a,c)=>a+c)
return a > b ? a:b
}