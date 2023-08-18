function solution(a, b) {
    const plus =  +(a.toString() + b.toString())
    return 2 * a * b >= plus ?   2 * a * b : plus
}