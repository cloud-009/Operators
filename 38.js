let n=128,rm,fn;
while (n>0) {
    rm = n%10;
    console.log(`Reaminder is ${rm}`);
    fn= n%rm;
    console.log(`Final value is ${fn}`);
    n=parseInt(n/10);
   if (fn==0)
   console.log(true)
   else
   console.log(false)
   break; 
}
