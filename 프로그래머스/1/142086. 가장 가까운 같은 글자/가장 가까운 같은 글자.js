// function solution(s) {
//     const array = []
//     for(let i = 0 ; i<s.length ; i++){
//         const char = s[i]
//         const lastIndex = s.lastIndexOf(char, i-1)
//     array.push(lastIndex === -1 ? -1 : i-lastIndex)
//     }
//     return array
// }

function solution(s){
    const ans = []
    const temp = []
    for(let i=0 ; i<s.length ; i++){
        const char = s[i]
        if(!temp.includes(char)){
            temp.push(char)
            ans.push(-1)
        } else if(temp.includes(char)){
           ans.push(i - temp.lastIndexOf(s[i]));
            temp.push(s[i]);
        }
    }
    return ans
}