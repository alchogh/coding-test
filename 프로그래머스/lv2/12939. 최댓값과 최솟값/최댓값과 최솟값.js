function solution(s) {
return [s.split(' ').map(v=> Number(v)).sort((a,b)=>a-b)[0],s.split(' ').map(v=> Number(v)).sort((a,b)=>a-b)[s.split(' ').length-1]].join(' ')
}