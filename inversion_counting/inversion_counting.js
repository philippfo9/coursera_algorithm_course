var request = require("request");

var start = process.hrtime();

var elapsed_time = function(note){
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
};

var inversions = 0;

function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return mergeAndCountInversion(
        mergeSort(left),
        mergeSort(right)
    );
}

function mergeAndCountInversion(arrLeft, arrRight) {
    var result = [];
    var indexLeft = 0;
    var indexRight = 0;
    while(indexLeft < arrLeft.length && indexRight < arrRight.length) {
        if(arrLeft[indexLeft] > arrRight[indexRight]) {
            inversions += arrLeft.length-indexLeft;
            result.push(arrRight[indexRight]);
            indexRight++;
        } else {
            result.push(arrLeft[indexLeft]);
            indexLeft++;
        }
    }
    return result.concat(arrLeft.slice(indexLeft)).concat(arrRight.slice(indexRight));
}


function countInversions(inversionArr) {
    let inv = 0;
    for(let i = inversionArr.length-1; i >= 0; i--) {
        for(let j = i-1; j >= 0; j--) {
            if(inversionArr[j] > inversionArr[i]) {
                inv++;
            }
        }
    }
    return inv;
}


var arr2 = [4, 80, 70, 23, 9, 60, 68, 27, 66, 78, 12, 40, 52, 53, 44, 8, 49, 28, 18, 46, 21, 39, 51, 7, 87, 99, 69, 62, 84, 6, 79, 67, 14, 98, 83, 0, 96, 5, 82, 10, 26, 48, 3, 2, 15, 92, 11, 55, 63, 97, 43, 45, 81, 42, 95, 20, 25, 74, 24, 72, 91, 35, 86, 19, 75, 58, 71, 47, 76, 59, 64, 93, 17, 50, 56, 94, 90, 89, 32, 37, 34, 65, 1, 73, 41, 36, 57, 77, 30, 22, 13, 29, 38, 16, 88, 61, 31, 85, 33, 54];

mergeSort(arr2);

console.log("inv", inversions);


request('https://d3c33hcgiwev3.cloudfront.net/_bcb5c6658381416d19b01bfc1d3993b5_IntegerArray.txt?Expires=1527724800&Signature=KjE1LuBD~61dJENJ4BCB0f0DIZ3WG88TQ3OF5EUCLZ1RqROsmUiMPaVQbR3By99rPUKCx86stNJSnHkoCWSX71TR5Fi37xl2KZxNVBFqnZ3w7E-TxRaWnOsogTDCFzlL19pTAapYe~CByHZh31gtECTwfpprLt1lUzlUbWEPa9k_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A', function (error, response, body) {
    inversions = 0;
    console.log(inversions);
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    let arr = body.split("\n").map(Number);
    arr.splice(arr.length-1, 1);
    console.log(arr.length);
    mergeSort(arr);
    console.log(inversions);
});


