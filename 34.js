function near(x, y) {
    let x1 = Math.abs(x - 21);
    let y1 = Math.abs(y - 21);
    if (x1 <y1 && x>21) {
        return y;
    }
    else if(x1>y1 && y>21){
        return x;
    }
    else {
        return 0;
    }
}
console.log(near(19,22));