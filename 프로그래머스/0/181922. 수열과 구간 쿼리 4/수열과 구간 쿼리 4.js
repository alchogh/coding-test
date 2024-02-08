function solution(arr, queries) {
    queries.map(v =>{
        const [s,e,k] = v
        for(let i=s ; i<=e ; i++){
           if(i%k===0) arr[i]++
        }
    })
    return arr
}