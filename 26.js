let n1 = 2;
let n2 = 3;
let n3 = 5;
let hcf;
for (let i = 1; i <= n1 && i <= n2 && i <= n3; i++) {
    if (n1 % i == 0 && n2 % i == 0 && n3 % i == 0) {
        hcf = i;
    }
}
console.log(`HCF of ${n1},${n2} and ${n3} is ${hcf}`);