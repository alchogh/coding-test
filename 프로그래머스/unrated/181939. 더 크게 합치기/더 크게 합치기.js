function solution(a, b) {
    return +(a.toString() + b.toString()) >= +(b.toString() +a.toString()) ? +(a.toString() + b.toString()) : +(b.toString() +a.toString())
}