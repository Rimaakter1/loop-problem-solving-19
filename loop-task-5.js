/*Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let sum = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        console.log(i);
        sum = sum + i;
    }

}
console.log(sum);


let sum1 = 0;
let n = 51;
while (n <= 85) {
    if (n % 2 === 0) {
        console.log(n);
        sum1 = sum1 + n;
    }
    n++;
}
console.log(sum1);


let sum3 = 0;
let i = 51;

do {
    if (i % 2 === 0) {
        console.log(i);
        sum3 = sum3 + i;
    }
    i++
}
while (i <= 85);
console.log(sum3);
