Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    } else {
        let pivot = choosePivot(arr);
        return partitionAroundPivot(arr, pivot);
    }
}

function partitionAroundPivot(arr, pivot) {
    let secondPartBoundary = 0;
    for(let m = 1; m < arr.length; m++) {
        let el = arr[m];
        if(el < pivot) {
            secondPartBoundary++;
            arr.move(m, secondPartBoundary);
        }
    }
    console.log("pivot", pivot);
    console.log("arr to splice", arr);
    console.log("boundary", secondPartBoundary);
    let firstpart = arr.splice(1, secondPartBoundary);
    console.log("firstpart", firstpart);
    let secondpart = arr.splice(1);
    console.log("secondpart", secondpart);
    quickSort(firstpart);
    quickSort(secondpart);
    console.log("arr before", arr);
    console.log("firstpart sorted", firstpart);
    console.log("secondpart sorted", secondpart);
    arr.unshift.apply(arr, firstpart);
    arr.push.apply(arr, secondpart);
    console.log("arr", arr);
    return arr;
}

function choosePivot(arr) {
    if(arr && arr.length > 0) {
        return arr[0];
    }
}


let b = [14, 12, 11, 3, 5, 1, 13, 8, 10, 9, 7, 2, 6];
console.log(quickSort(b));