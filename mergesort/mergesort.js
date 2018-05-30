var start = process.hrtime();

var elapsed_time = function(note){
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
};

function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(arrLeft, arrRight) {
    var result = [];
    var indexLeft = 0;
    var indexRight = 0;
    while(indexLeft < arrLeft.length && indexRight < arrRight.length) {
        if(arrLeft[indexLeft] < arrRight[indexRight]) {
            result.push(arrLeft[indexLeft]);
            indexLeft++;
        } else {
            result.push(arrRight[indexRight]);
            indexRight++;
        }
    }
    return result.concat(arrLeft.slice(indexLeft)).concat(arrRight.slice(indexRight));
}

var arr = [];
for(var i = 0; i < 10000000; i++) {
    arr.push(Math.floor((Math.random() * 10000) + 1));
}
elapsed_time("start mergesort");
mergeSort(arr);
elapsed_time("end mergesort");
elapsed_time("start normalsort");
arr.sort();
elapsed_time("end normalsort");

