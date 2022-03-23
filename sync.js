function first(a,b,c) {
    let sum = a + b;
    c(sum);
}
function second(d) {
    console.log("Hi");
}

first(1,2,second);