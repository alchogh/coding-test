function solution(arr, intervals) {
    const answer = []
    const [[a,b],[c,d]] = intervals
    const first = [...arr].slice(a,b+1)
    const second = [...arr].slice(c,d+1)
    const sum = answer.push(first, second)
    return [...answer[0], ...answer[1]]
}