function solution(s){
  const a =  Array.from(s.toLowerCase())
  const p = a.filter(v=>v ==='p').length
  const y =  a.filter(v=>v ==='y').length
  return p===y ? true : false
}