let a=1,b=2,sum=2,c=0;
while (c<4000000) {
    c=a+b; 
    console.log(c);
    a=b; 
    b=c; 
    if(c%2==0)
    sum+=c;
}
console.log(sum);