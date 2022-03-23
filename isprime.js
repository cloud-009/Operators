function myFunc(x) {
    if (x < 0)
        return -1;
    else if (x === 0)
        return 1;
    else {
        return (x * myFunc(x - 1));
    }
}
let y = console.log(myFunc(1));
let count = 0;
for (let i = 0; i <= y; i++) {
    if (y % i == 0) {
        count++;
    }
}
if (count == 2) {
    console.log("It is Prime");
}
else {
    console.log("It is not prime");
}