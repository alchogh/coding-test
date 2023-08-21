function solution(my_string, indices) {
return [...my_string].map((v,i)=>indices.includes(i) ? 0 : v).filter(v=>v!==0).join('')
}