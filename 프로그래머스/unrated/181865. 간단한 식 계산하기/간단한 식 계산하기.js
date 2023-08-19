function solution(binomial) {
  const array = binomial.split(' ')
   if(array[1]=== '+'){
      return (+array[0])+ (+array[2])
   } else if(array[1]==='-'){
      return array[0]-array[2]
   } else {
      return array[0] * array[2]
   }
}