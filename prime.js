let x = 6;
count = 0;
for (let i = 1; i <= x; i++) {
    if (x % i == 0) {
        count++;
    }
}
if (count == 2) {
    console.log("Prime number");
}
else {
    console.log("Not prime");
}
