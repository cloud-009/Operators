let x=2,y=3,z=6;
let x1 = Math.abs(x, y);
let x2 = Math.abs(x, z);
let x3 = Math.abs(y, z);

function close() {
    if (x1 ===1 && x3 ===1){
        return true;
    }
    else if(x1 ==1 && x2 >1) {
        return true;
    }
    else {
        return false;
    }
}
console.log(close());
 

