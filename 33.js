let a=4,b=1,c=3;
let result= Math.abs(a-b)==1 && Math.abs(a-c)>=2 && Math.abs(b-c) >=2 || Math.abs(a-c)==1 && Math.abs(b-c)>=2 && Math.abs(a-b) >=2;
console.log(result);