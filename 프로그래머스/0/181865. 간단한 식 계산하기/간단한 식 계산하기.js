function solution(binomial) {
 const [first, operator, second] = binomial.split(' ')
    if(operator === '+') return +first + +second
    if(operator ==='-') return first - second 
    if(operator ==='*') return first * second 
}

