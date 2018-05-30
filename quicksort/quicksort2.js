Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

function quickSort(items, left, right) {
    if(items.length > 1) {
        left = (left)?left:0;
        right = (right)?right:items.length-1;

        let index = partition(items, left, right);

        if (left < index) {
            quickSort(items, left, index);
        }

        if (index+1 < right) {
            quickSort(items, index+1, right);
        }
    }

    return items;
}

function partition(items, left, right) {
    let pivot = choosePivot(items.slice(left, right));

    let secondPartBoundary = left+1;
    for(let m = left+1; m <= right; m++) {
        let el = items[m];
        if(el < pivot) {
            items.move(m, secondPartBoundary);
            secondPartBoundary++;
        }
    }
    items.move(left, secondPartBoundary-1);
    return secondPartBoundary-1;

}

function choosePivot(items) {
    return items[0];
}

let b = [14, 21, 12, 11, 3, 5, 17, 1, 13, 8, 16, 10, 4, 9, 7, 2, 6, 15];
console.log(quickSort(b));