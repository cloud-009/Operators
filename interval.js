function displayTime(){
    let x = new Date().toLocaleString();
    console.log(x);
}
let y = setInterval(displayTime, 1000);     