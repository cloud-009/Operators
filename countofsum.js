function count(x,y,z) {
    if (x===y && x===z) {
       return sum = 0;
    }
    else if (x===y ||x===z || y===z) {
        if (x ===y) {
            return sum =z;
        }
        else if(y===z) {
            return sum =x;
        }
        else (x===z) 
            return sum =y;
        
    }
    
    else {
        return sum = x+y+z;
    }
}
console.log(count(1,2,2));