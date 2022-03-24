let number = window.prompt("Enter tha number:");
let temp = number;
let sum = 0;
let noofdigits = number.length;
while (temp > 0) {
    let dgts = temp % 10;
    console.log(dgts);
    sum += dgts ** noofdigits;
    console.log(sum);
    temp = parseInt(temp / 10);
    console.log(temp);
}
if (sum == number) {
    console.log(`${number} is an armstrong number`);
}
else {
    console.log(`${number} is not an armstrong number`);
}