var firstInt = 3141592653589793238462643383279502884197169399375105820974944592;
var secondInt = 2718281828459045235360287471352662497757247093699959574966967627;
var fs = require('fs');
var res = firstInt*secondInt;
console.log(res);
const len = Math.ceil(Math.log10(res));
var nStr = "";
for(var i = len-1; i >= 0; i--) {
    nStr += (Math.floor(res / Math.pow(10, i)));
    res = res - Math.floor(res / Math.pow(10, i)) * Math.pow(10, i);
}
fs.writeFile("./number.txt", nStr, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
console.log(nStr);
console.log(nStr.length);

function toFixed(x) {
    if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10,e-1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
        }
    } else {
        var e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10,e);
            x += (new Array(e+1)).join('0');
        }
    }
    return x;
}


function karatsuba(x, y) {
    if(x < 10 || y < 10) {
        return x * y;
    }

    x
}