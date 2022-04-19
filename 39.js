let limit = 1000, sum=0;
for (let i = 1; i < limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i);
        sum += i;
    }
}
console.log(`Sum is ${sum}`);