function solution(arr, queries) {
    for(let i=0 ; i<queries.length ; i++){
       for(q=queries[i][0] ; q<=queries[i][1] ; q++){
          arr[q]++
       }
    }
    return arr
}