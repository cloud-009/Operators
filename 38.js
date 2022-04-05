let n =128,r;
while(n>0){
    r=n%10;
    let final = n%r;
    n=parseInt(n/10);
    if(final==0)
    console.log(true);
    else
    console.log(false)
    break;
}