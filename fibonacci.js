let x = 0, y = 1;
let sum = 0;
let n = 5;
for (let i = 0; i <= n; i++) {
    console.log(x);
    sum = x + y;
    x = y;
    y = sum;
  //  console.log(y);
}