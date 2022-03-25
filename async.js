async function hello() {
    let res =  await fetch("https://fakestoreapi.com/products");
    let data = res.json();
    console.log(data);
}
hello();