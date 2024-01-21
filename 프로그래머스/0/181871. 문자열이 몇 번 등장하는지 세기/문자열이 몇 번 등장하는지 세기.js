function solution(myString, pat) {
    const arr = []
    for(let i=0; i<=myString.length-pat.length ; i++){
        const sliceString = myString.slice(i, pat.length+i)
        arr.push(sliceString)
    }
    return arr.filter(v=>v===pat).length
}