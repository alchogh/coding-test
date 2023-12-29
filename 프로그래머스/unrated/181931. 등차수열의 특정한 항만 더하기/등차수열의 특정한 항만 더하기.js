function solution(a, d, included) {
  return Array(included.length).fill(a).map((v,i)=> v+(d*i)).filter((v,i)=> included[i]).reduce((a,c)=>a+c)
}