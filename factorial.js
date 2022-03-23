function myFunc(x) {
    if (x < 0)
        return -1;
    else if (x === 0)
        return 1;
    else {
        return (x * myFunc(x - 1));
        
    }
}
console.log(myFunc(5));
