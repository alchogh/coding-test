function solution(myString, pat) {
    const letters = myString.split(pat)
    const joinLetters= letters.slice(0,-1).join(pat)
    return joinLetters + pat
}