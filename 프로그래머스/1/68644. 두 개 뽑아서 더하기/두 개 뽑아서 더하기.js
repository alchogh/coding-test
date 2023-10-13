function solution(numbers) {
    const array = []
    
  for(let i=0 ; i<numbers.length ; i++){
      for(let j=i+1 ; j<numbers.length ; j++){
         array.push(numbers[i]+ numbers[j])
      }
  }
    const set = new Set(array)
    const answer1 = Array.from(set) 
    return answer1.sort((a,b)=>a-b)
}