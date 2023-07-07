function solution(emergency) {
 let emergencyNumber =[...emergency].sort((a,b)=>b-a)
    return emergency.map(v=>emergencyNumber.indexOf(v)+1)
}