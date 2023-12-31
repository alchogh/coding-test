function solution(str_list) {
    const lIndex = [...str_list].indexOf('l')
    const rIndex = [...str_list].indexOf('r')
   if (lIndex !== -1 && (lIndex < rIndex || rIndex === -1)) {
        // "l"이 먼저 나오는 경우, "l"을 기준으로 왼쪽의 문자열들을 반환
        return str_list.slice(0, lIndex);
    } else if (rIndex !== -1 && (rIndex < lIndex || lIndex === -1)) {
        // "r"이 먼저 나오는 경우, "r"을 기준으로 오른쪽의 문자열들을 반환
        return str_list.slice(rIndex + 1);
    } else {
        // "l"이나 "r"이 없는 경우
        return [];
    }
}