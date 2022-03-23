let value = 123;
let sum =0;
while(value) {
    sum+= value %10;
    console.log(sum);
    value = Math.floor(value/10);
    console.log(value);
}

console.log(sum);