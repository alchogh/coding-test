function solution(participant, completion) {
    const sortP = participant.sort()
    const sortC = completion.sort()
    for(let i=0 ; i<participant.length ; i++){
        if(participant[i]!==completion[i]){
            return participant[i]
        }
    }
    
}
