function solution(order) {
    var answer = 0;
    return order.map(v=> {
        if(v.includes('latte')) return 5000
        if(v.includes('americano')) return 4500
        if(v==='anything') return 4500
    }).reduce((a,c)=>a+c,0)
}