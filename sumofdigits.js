let value = 10;
let sum = 0;
while (value > 0) {
    sum += value % 10;
    //console.log(sum);
    value = Math.floor(value / 10);
    console.log(value);
}

console.log(sum);