function solution(l, r) {
    const result = []
    
    for(let i=l ; i<=r; i++) {
        const str = i.toString()
        if(str.split('').every(char=> char==='0' || char==='5')){
            result.push(i)
        }
    }
    
    return result.length > 0 ? result : [-1];
}