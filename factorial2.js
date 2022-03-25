let a =prompt("enter the number");
let fact =1;
let z= true;
for (let i=1;i<=a;i++){
    fact *=i;
}
console.log("fact is "+fact+"<br>");
for(let i=1;i<fact;i++){
    if(fact%i==0){
        z=false;
        break;
    }
}
if(z) {
    console.log("It is prime");
}
else {
    console.log("It is not prime");
}