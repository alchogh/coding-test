function solution(num_list) {
    const condition = num_list[num_list.length-1] >num_list[num_list.length-2]
    // const large = [...num_list].push(num_list[num_list.length-1]-num_list[num_list.length-2])
    // const small = num_list.push(num_list[num_list.length-1]*2)
    return condition ? [...num_list, num_list[num_list.length-1]-num_list[num_list.length-2]] :[...num_list, num_list[num_list.length-1]*2] 
  
}