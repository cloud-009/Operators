let count = true;
let p1 = new Promise(function(resolve,reject){
    if (count){
        resolve("Count it true");
    }
    else {
        reject("Count is false");
    }
})
console.log(p1);