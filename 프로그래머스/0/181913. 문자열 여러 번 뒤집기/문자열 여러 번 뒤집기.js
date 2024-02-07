function solution(my_string, queries) {
    const stringArr = [...my_string];
    queries.forEach(([s, e]) => {
        let part = stringArr.slice(s, e + 1).reverse(); 
        for (let i = s; i <= e; i++) { 
            stringArr[i] = part[i - s];
        }
    });
    return stringArr.join(''); 
}