function solution(score) {
    const arr = []
    for(let i=0 ; i<score.length ; i++){
        arr.push((score[i][0]+ score[i][1])/2)
    }
const rank = [...arr].sort((a,b)=>b-a)
    

  return arr.map(v=>rank.indexOf(v)+1)
}

