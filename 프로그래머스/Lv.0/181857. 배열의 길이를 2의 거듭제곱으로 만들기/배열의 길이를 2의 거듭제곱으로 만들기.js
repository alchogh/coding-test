function solution(arr) {
    while (!((arr.length & (arr.length - 1)) === 0 && arr.length !== 0)) {
        arr.push(0);
    }
    return arr;
}