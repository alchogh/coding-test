function solution(arr, query) {
    let result = arr
    query.map((v,i)=>{
        if(i%2===0){
            result = result.slice(0, v+1)
        } else {
            result = result.slice(v)
        }
    })
    return result
}