function some(na, cal){
    console.log("Hi"+""+na);
    cal();
}
function thing(){
    console.log("After first");
}
some('Peter', thing);