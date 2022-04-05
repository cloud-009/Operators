let x=2,y=6,z=6;
let x1=Math.abs(x-y);
let x2=Math.abs(y-z);
let x3=Math.abs(z-x);

if (x==y && x==z) 
console.log(true);
if (x==y || x==z || x==z)
console.log(false);

if (x1==x2)
console.log(true);
else if(x2==x3)
console.log(true);
else if(x1==x3)
console.log(true);
else 
console.log(false);