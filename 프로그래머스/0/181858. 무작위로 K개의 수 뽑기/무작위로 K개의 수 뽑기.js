function solution(arr, k) {

    const set = new Set(arr)
    const sliceNum = [...set].slice(0,k)
 

    return sliceNum.length===k ? sliceNum : [...set, ...Array(k -set.size).fill(-1)]
}
