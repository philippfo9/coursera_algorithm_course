var r = 0.9;
var k = 5;

let sum = 0;
for(let i = 0; i <= k; i++) {
    sum += Math.pow(r, i);
}

console.log(sum);

let a = Math.pow(r, k+1) - 1;
let b = r-1;

console.log(a/b);