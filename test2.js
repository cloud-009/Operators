function w(t) {
    this.t = tr;
}
w.prototype.ask = function(q) {
    console.log(this.t.q);
}
var d = new w("JS");
d.ask= function(q) {
    this.ask(q);
}
d.ask("Hello");