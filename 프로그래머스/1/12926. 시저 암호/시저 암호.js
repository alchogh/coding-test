function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const lower = "abcdefghijklmnopqrstuvwxyz";
    
    let answer = '';
    
    for(const char of s){
        
        if(char === ' '){
            answer += ' '
            continue
        }
        
        const targetArr = upper.includes(char) ? upper : lower
        
        
        const currentIndex = targetArr.indexOf(char)
        
        const newIndex = (currentIndex + n) % 26
        
        answer += targetArr[newIndex]
    }
    
    return answer
}