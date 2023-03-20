exports.add = function (x, y) {

    if (!isNaN(x) && !isNaN(y)) 
    {
	    return x + y;
    }
    else 
    {
        return "Invalid Number"
    }
};
  
exports.sub = function (x, y) {

    if (!isNaN(x) && !isNaN(y)) {
        return x - y;
    }
    else 
    {
        return "Invalid Number"
    }
};
  
exports.mult = function (x, y) {

    if (!isNaN(x) && !isNaN(y)) {
        return x * y;
    }
    else 
    {
        return "Invalid Number"
    }
};

