function solution(numbers) {
    answer=0
    for(i=0 ; i<=9 ; i++){
    if(!numbers.includes(i)){
        answer+=i 
    }
    }
    return answer
}