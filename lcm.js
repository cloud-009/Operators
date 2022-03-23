let n1 = 2;
let n2 = 3;
let n3 = 5;
let min = n1>n2? n1:n2;
//console.log(min);
while(true){
    if (min%n1==0 && min%n2==0){
        console.log(`Lcm of ${n1} and ${n2} is ${min}`);
        break;
    }
    min++;
}