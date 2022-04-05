function getDivisor(num) {
    if (num === 1)
        return 1;
    let n = Math.ceil(Math.sqrt(num));
    let total = 1;
    divisor = 2;
    while (divisor < n) {
        if (num % divisor == 0) {
            total += divisor;
            total += num;
        }
        divisor++;
    }
    if (n ** 2 === num) {
        total += n;
    }
    return total;
}
console.log(getDivisor(28));