function solution(myStr) {
    let result = myStr.split(/a|b|c/).filter(v=>v)
  if(result.length===0) result = ["EMPTY"]
    return result
}