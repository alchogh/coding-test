function solution(num_list, n) {
    const a = num_list.filter((v,i)=> i<n).join('')
    const b =num_list.slice(n).join('')
    return  [b,a ].join('').split('').map(v=>+v)
}