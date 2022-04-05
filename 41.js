function largestPalindrome() {
    let arr = [];
    for (let i = 999; i > 100; i--) {
        for (let j = 999; j > 100; j--) {
            let mul = j * i;
            if (isPalin(mul)) {
                arr.push(j * i);
            }
        }
    }
    return Math.max.apply(Math, arr);
}
function isPalin(i) {
    return i.toString() == i.toString().split("").reverse().join("");
}
console.log(largestPalindrome());