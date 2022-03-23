var gr = "Hello";
function hi() {
    console.log('2:', gr);
    var gr = "Ciao";
    console.log('3:',gr);
}
console.log('1:', gr);
hi();
console.log('4:',gr);