function some(name, cal){
    console.log("Hi"+""+name);
    cal();
}
function thing(){
    console.log("After first");
}
some('Peter', thing);