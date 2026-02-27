function solution(s, skip, index) {
    
    let answer = ''
    
    const allAlphabets = "abcdefghijklmnopqrstuvwxyz"
    
    const available = [...allAlphabets].filter(char => !skip.includes(char))

    for(const char of s){
        const currentIndex = available.indexOf(char)
        
        const newIndex = (currentIndex + index) % available.length
        
        answer += available[newIndex]
    }
    
    return answer
}