function solution(n)
{
 const arr = n.toString().split('').map(v=>+v).reduce((a,c)=>a+c,0)
 return arr
}