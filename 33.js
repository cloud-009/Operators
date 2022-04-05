let x=2,y=3,z=4;
let x1 = Math.abs(x-y);
let x2 = Math.abs(y-z);
let x3 = Math.abs(z-x);
function close () {
    if (x1==1 && x2==1) {
        return false;
    }
    else if ((x1==1 )||(x2==1)||(x3==1)){
        return true;
    }
    else {
        return false;
    }
}
console.log(close());