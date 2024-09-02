/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */



// for loop 
let sum = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 !== 0) {
        sum = sum + i;

    }
}
console.log(sum);


// while loop 

let sum1 = 0;
let i = 91;
while (i <= 129) {
    if (i % 2 !== 0) {
        sum1 = sum1 + i;

    }
    i++;
}

console.log(sum1);


// do while 

let n = 91;
let sum3 = 0;
do {
    if (n % 2 !== 0) {
        sum3 = sum3 + n;

    }

    n++;

}

while (n <= 129);
console.log(sum3);



