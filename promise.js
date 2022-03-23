let count = true;
let value = new Promise(function (resolve,reject) {
    if (count){
        resolve("there is a count value");
    }
    else {
        reject("there is no count value");
    }
});
console.log(value);