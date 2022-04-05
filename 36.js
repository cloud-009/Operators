function run (small, big, goal) {
    let r = goal % 5;
    if (small + (big * 5) < goal)
        return -1;
    else if (r <= small && goal - big * 5 > 4)
        return r + 5;
    else if (r <= small)
        return r;
    else
        return -1;
}
console.log(run(4,1,7));