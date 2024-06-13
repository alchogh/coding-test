function devidedZero(n) {
    let count = 0;

    for(let i=1; i<=Math.sqrt(n); i++) {
        if(Math.sqrt(n)==i) count++;
        // 예를 들어 4의 경우 2로 나누면 2,2가 아닌 2가 약수이기 때문에 1개 추가
        else if(n%i==0) count+=2;
        // 예를 들어 10의 경우 2로 나누면 5가 자동으로 나오기 때문에 2개 추가
    }
    
    return count;
}

function solution(number, limit, power) {
    let answer = 0;

    for (let i = 1; i <= number; i++) {
        let divisorsCount = devidedZero(i);
        
        if (divisorsCount > limit) {
            answer += power;
        } else {
            answer += divisorsCount;
        }
    }

    return answer;
}