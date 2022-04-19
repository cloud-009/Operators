function even(a,b,c) {
    let temp;
    if (a>b) {
        temp = a;
        a=b;
        b=temp;
    }
    if(b>c) {
        temp =b;
        b=c;
        c=temp;
    }
    if (a>b) {
        temp=a;
        a=b;
        b=temp;
    }
    return b-a==c-b;
}
console.log(even(4,12,8));