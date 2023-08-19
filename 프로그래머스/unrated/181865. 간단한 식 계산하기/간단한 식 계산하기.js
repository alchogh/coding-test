function solution(binomial) {
  const [first, operator, second ] = binomial.split(' ')
   if(operator=== '+'){
      return (+first)+ (+second)
   } else if(operator==='-'){
      return first-second
   } else {
      return first * second
   }
}