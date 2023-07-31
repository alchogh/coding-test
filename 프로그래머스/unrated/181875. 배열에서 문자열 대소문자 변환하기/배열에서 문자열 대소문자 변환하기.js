function solution(strArr) {
 return strArr.map((letter, index)=> index%2===0? letter.toLowerCase(): letter.toUpperCase() )
}