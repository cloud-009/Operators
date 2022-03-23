let value = 123;
let sum=0;
while (true) {
    sum += value %10;
    value = Math.floor(value/10);
}

console.log(sum);