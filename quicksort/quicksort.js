

function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    } else {
        let pivot = choosePivot(arr);
        return partitionAroundPivot(arr, pivot);
    }
}

function partitionAroundPivot(arr, pivot) {
    let firstpart = [];
    let secondpart = [];
    arr.forEach(el => {
        if(el < pivot) {
            firstpart.push(el);
        } else if(el > pivot) {
            secondpart.push(el);
        }
    });
    firstpart = quickSort(firstpart);
    secondpart = quickSort(secondpart);
    let ret = firstpart;
    ret.push(pivot);
    return ret.concat(secondpart);
}

function choosePivot(arr) {
    if(arr && arr.length > 0) {
        return arr[0];
    }
}


let b = [11, 3, 5, 1, 8, 10, 9, 7];
console.log(quickSort(b));