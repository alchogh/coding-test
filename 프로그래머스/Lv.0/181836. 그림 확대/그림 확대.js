function solution(picture, k) {
    const arr = []
    
    picture.map((pic)=>{
        const repeat = [...pic].map(el=> el.repeat(k)).join('')
        
        for(let i=1 ; i<=k ; i++){
            arr.push(repeat)   
        }
    })
  return arr
}