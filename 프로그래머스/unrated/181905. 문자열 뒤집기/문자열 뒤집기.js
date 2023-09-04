function solution(my_string, s, e) {
   const reverseString = my_string.slice(s,e+1).split('').reverse().join('')
    const firstString = my_string.slice(0,s)
    const lastString = my_string.slice(e+1)
    return firstString + reverseString  + lastString
}