function solution(strings, n) {
  const idx = [...strings].map((v,i)=> v[n])
  return idx.findIndex(idx.sort())
}