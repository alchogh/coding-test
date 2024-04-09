// function solution(n){
//     let count = 0 
//     for(let s=1 ; s<=n ; s++){
//         let sum = 0 
//         for(let num=s ; sum<n ; num++){
//             sum += num
//             if(sum===n){
//                 count ++
//                 break;
//             }
//         }
//     }
//     return count
// }

function solution(n){
    let count = 0
    for(let s=1 ; s<=n ; s++){
        let sum = 0 
        for(let num = s ; sum<=n ; num++){
            sum += num 
            if(sum===n){
                count ++
                break;
            }
        }
    }
    return count
}



// function solution(n) {
//     let count = 0;  // 연속된 수열을 찾은 경우의 수를 저장할 변수
//     let start = 1;  // 시작 숫자

//     while (start <= n) {
//         let sum = 0;
//         let num = start;
//         while (sum < n) {
//             sum += num; // start에서 시작하여 num을 계속 더해감
//             num++;      // 다음 숫자로 이동
//         }
//         if (sum == n) {
//             count++; // 합이 n과 같으면 경우의 수 하나 증가
//         }
//         start++; // 다음 시작 숫자로 이동
//     }
//     return count;
// }