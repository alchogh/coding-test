function solution(n, slicer, num_list) {
    if(n===1){
    return num_list.slice(0,slicer[1]+1)   
   } else if(n===2){
    return num_list.slice(slicer[0],num_list.length+1)
   } else if(n===3){
       return num_list.slice(slicer[0],slicer[1]+1)
   } else{
       const arrangeNum = num_list.slice(slicer[0],slicer[1]+1)
       return arrangeNum.filter((v,i)=> i%slicer[2]===0)
   }
}