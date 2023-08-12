function solution(a, b) {
    let answer = 0
    if(a%2===0 && b%2===0){
       answer=Math.abs(a-b)
    }
    if(a%2===1 && b%2===1){
      answer=  a*a + b*b
    }
    if((a%2===1 && b%2===0)|| (a%2===0 && b%2===1)){
        answer= 2 * (a + b)
    }
    return answer
}