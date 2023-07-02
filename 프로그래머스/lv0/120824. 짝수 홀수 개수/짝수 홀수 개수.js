function solution(num_list) {
  const array= [0,0]
  for(item of num_list){
      array[item%2]+=1
  }
    return array
}