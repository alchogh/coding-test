function solution(num_list) {
    const a = num_list.filter(v=>v%2===1).join('')
    const b =num_list.filter(v=>v%2===0).join('')
   return Number(a) + Number(b)
}