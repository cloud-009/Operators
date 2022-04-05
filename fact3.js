function fact(x){
    if (x<0)
    return -1;
    else if(x==0)
    return 1;
    else {
        return (x*fact(x-1));
    }
}
let y = console.log(fact(5));
