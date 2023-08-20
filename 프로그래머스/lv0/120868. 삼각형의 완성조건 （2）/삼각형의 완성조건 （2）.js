function solution(sides) {
    const side = sides.sort((a,b)=>a-b)
    const small = side[0]
    const big = side[0] -1
    return 2* side[0] -1
}
