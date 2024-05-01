function solution(n) {
    const countOne = (x) => x.toString(2).split('0').join('').length
    const nOneLength = countOne(n)
    let num = n+1
    
    while(nOneLength !== countOne(num)){
        num++
    }


    return num
}

