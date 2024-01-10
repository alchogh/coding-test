function solution(rank, attendance) {
    let answer = [];
    for(let i=0;i<rank.length;i++){
        if(attendance[i]) answer.push(rank[i]);
    }
    answer.sort((a,b) => a - b);
    const participant = idx => rank.indexOf(answer[idx]);
    
    return 10000 * participant(0) + 100 * participant(1) + participant(2);
}
