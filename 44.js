let sum =1000,a;
for(a=1;a<=sum/3;a++) {
    let b;
    for (b=1;b<sum/2;b++) {
        let c = sum -a-b;
        if(a*a+b*b==c*c)
        console.log(a,b,c);
    }
}