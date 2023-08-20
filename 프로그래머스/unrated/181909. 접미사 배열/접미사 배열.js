function solution(my_string) {
    const stringLength= my_string.length
    return [...my_string].reduce((acc, cur, idx)=>{
        const curString = my_string.slice(idx, stringLength)
        return [...acc, curString]
    },[]).sort()
}