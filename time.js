function showTime() {
    //let dateTime = new Date();
    let time = new Date().toLocaleTimeString();
    console.log(time);
}
let display = setInterval(showTime , 3000);