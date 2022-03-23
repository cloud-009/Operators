let x = prompt("enter a value:");
let y = prompt("enter another value:"); 
if (x===y) {
    console.log("Both values are same give different values");
}
else {
    [x,y] = [y,x];
    console.log(`value of x after swapping is ${x}`);
    console.log(`value of y after swapping is ${y}`);
}