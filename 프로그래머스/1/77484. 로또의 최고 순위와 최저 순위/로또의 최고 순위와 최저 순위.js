const getRank = count=> {
    switch (count) {
        case 6: return 1;
        case 5: return 2;
        case 4: return 3;
        case 3: return 4;
        case 2: return 5;
        default: return 6;
    }
}


function solution(lottos, win_nums) {
    const filterLottos = [...lottos].filter(v=> !win_nums.includes(v))
    const arrLength = lottos.length- filterLottos.length
    const zeroCount = lottos.filter((v) => v === 0).length;
    const maxCount = arrLength + zeroCount  
    const minCount = 6- filterLottos.length
    
    
     const bestRank = getRank(maxCount);
    const worstRank = getRank(minCount);
    
    return [bestRank, worstRank];
}