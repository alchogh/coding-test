function solution(s) {
    const array = s.split(' ').map(v=>v.toLowerCase())
    return array.map(list => list.replace(list.charAt(0), list.charAt(0).toUpperCase())).join(' ')
}