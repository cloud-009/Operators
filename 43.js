let n = 100;
function run () {
    let sum=0;
    let sum1=0;
    for(let i =1;i<=n;i++){
        sum+=i;
        sum1+=i*i;
    }
    return sum*sum-sum1;

}
console.log(run());