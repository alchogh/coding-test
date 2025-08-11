function solution(x) {
 //x를 배열로 바꾸기
    const sum = [...String(x)].map(v=>Number(v)).reduce((a,c)=>a+c,0)
    
//x를 더한 값이랑 나누기
    return x%sum === 0 ? true : false
}