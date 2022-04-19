let a =3,b=3,c=3;
let result = a==b && a==c?0:a==b?c:a==c?b:b==c?a:a+b+c;
console.log(result);