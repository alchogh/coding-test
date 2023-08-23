function solution(arr) {
    const startNum = arr.indexOf(2)
    const lastNum = arr.lastIndexOf(2)
    return arr.includes(2) ?  arr.slice(startNum, lastNum+1) : [-1]
}