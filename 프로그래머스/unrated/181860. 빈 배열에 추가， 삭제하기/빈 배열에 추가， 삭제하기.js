function solution(arr, flag) {
    const X = []
    arr.forEach((n,i)=>{
        if(flag[i]) X.push(...Array(n*2).fill(n))
        else X.splice(-n)
    })
    return X
}