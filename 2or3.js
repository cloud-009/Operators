function greater(a, b, c) {
    if (a > b && a > c) {
        console.log("a is greater");
    }
    else if ((b > a && b > c) || (a==b && a==c)) {
        console.log("b is greater");
    }
    else {
        console.log("c is greater");
    }
}
function smaller(x, y, z) {
    if (x < y && x < z) {
        console.log("x is smaller");
    }
    else if (y < x && y < z) {
        console.log("y is smaller");
    }
    else {
        console.log("z is smaller");
    }
}
greater(12, 13, 7);
smaller(2, 3, 4);