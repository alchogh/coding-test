function solution(my_string) {
  const array = my_string.split(' ')
  
  let num = Number(array[0])
  
   array.map((v,i)=>{
      if(v==='+'){
          num += Number(array[i+1])
      } else if(v==='-'){
          num -= Number(array[i+1])
      }
  })
    return num
}