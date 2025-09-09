function solution(players, callings) {
    // 선수 이름으로 현재 등수(인덱스)를 빠르게 찾기 위한 Map 생성
    const playerMap = new Map();
    players.forEach((player, index) => {
        playerMap.set(player, index);
    });

    // callings 배열을 순회하며 등수 변경 처리
    for (const callingPlayer of callings) {
        // 1. 추월한 선수의 현재 등수(인덱스) 찾기
        const currentIndex = playerMap.get(callingPlayer);
        
        // 2. 추월당한 앞 선수 이름 찾기
        const frontPlayer = players[currentIndex - 1];

        // 3. players 배열에서 두 선수의 위치를 변경 (Swap)
        players[currentIndex - 1] = callingPlayer;
        players[currentIndex] = frontPlayer;

        // 4. Map에서도 두 선수의 등수(인덱스) 정보 업데이트
        playerMap.set(callingPlayer, currentIndex - 1);
        playerMap.set(frontPlayer, currentIndex);
    }

    return players;
}