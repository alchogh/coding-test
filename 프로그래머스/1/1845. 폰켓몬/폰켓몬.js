function solution(nums) {
    const setNum = new Set([...nums])
    if(nums.length/2 >= setNum.size){
        return setNum.size
    } else {
      return  nums.length/2
    }

}