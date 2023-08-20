function solution(my_string) {
   return [...my_string].fill().map((v,i)=>my_string.substring(i)).sort()
}