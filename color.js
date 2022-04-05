function color(){
    let x = document.body;
    x.style.backgroundColor= x.style.backgroundColor == "blue" ? "rgb(44, 52, 78)" : "rgb(84, 52, 3)"
}
let stop = setInterval(color, 1000);
function coloroff(){
    clearInterval(stop);
}