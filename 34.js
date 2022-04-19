function nearTo21(num1, num2) {
    let result;
    if (num1 > 21 && num2 > 21) {
        return (result = 0);
    } else if (num1 > 21) {
        return (result = num2);
    } else if (num2 > 21) {
        return (result = num1);
    } else if (21 - num1 > 21 - num2) {
        return (result = num2);
    } else {
        return (result = num1);
    }
}
console.log(nearTo21(22, 23));