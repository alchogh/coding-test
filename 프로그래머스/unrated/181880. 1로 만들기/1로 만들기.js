function solution(num_list) {
    let count = 0 
    num_list.forEach((num)=>{
        while(num!==1){
            if(num%2===0){
                num /= 2
                count +=1
            } else {
                num= (num-1)/2
                count +=1
            }
        }
    })
    return count
}