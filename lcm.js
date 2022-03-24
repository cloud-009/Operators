let n1 = 10;
let n2 = 20;
let n3 = 15;
let minimum = 0;
if (n1 > n2 && n1 > n3) {
    minimum = n1;
}
else if (n2 > n1 && n2 > n3) {
    minimum = n2;
}
else {
    minimum = n3;
}
while (minimum > 0) {
    if (minimum % n1 == 0 && minimum % n2 == 0 && minimum % n3 == 0) {
        console.log(`Lcm of ${n1}, ${n2} and ${n3} is ${minimum}`);
        break;
    }
    minimum++;
}