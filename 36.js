function run(sm,bg,gl) {
    let rm = gl %5;
    if (sm+bg*5<gl)
    return -1;
    else if(rm<=sm && sm-bg*5>4)
    return r+5;
    else if(rm<=sm)
    return rm;
    else 
    return -1;
}
console.log(run(2,1,4));