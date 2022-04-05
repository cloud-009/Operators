let sum = 1000;
for (let a=1; a<=sum/3;a++) {
    for(let b =a+1; b<=sum/2;b++) {
        let x = sum - a - b;
        if ((a*a)+(b*b) === (x*x))
        console.log(`${a}, ${b} and ${x}`);
    }
}