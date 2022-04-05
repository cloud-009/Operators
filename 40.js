let sum = 2;
let a = 1;
let b = 2;
while (a < 4000000) {
    let c = a;
    a = b;
    b = c + b;
    if (b % 2 == 0) {
        sum += b;
    }
}
console.log(sum);