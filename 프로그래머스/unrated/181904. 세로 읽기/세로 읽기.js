function solution(my_string, m, c) {
  return my_string.split('').filter((v,i)=> i%m===0 +c-1 ).join('')
}