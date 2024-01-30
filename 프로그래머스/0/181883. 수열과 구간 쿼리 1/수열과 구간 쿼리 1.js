function solution(arr, queries) {
     queries.map(v=>{
        let [s,e] = v
        for(let i=s ; i<=e ; i++){
             arr[i]++
        }
    })
    return arr
}

