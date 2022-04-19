function one (n) {
    while (n%10!=0 ||n==10||n%10==0) {
        if (n%10==1)
        return true;
        else
        n=n/10;
    }
    return false;
}
console.log(one(110));