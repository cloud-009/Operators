let value = 2 ** 1000, sum = 0;
console.log(value);
for (let i = 1; i <= 10; i++) {
    r = value % 10;
    sum = sum + r;
    value = parseInt(value / 10);
}
console.log(sum);