// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'sockMerchant' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER n
//  *  2. INTEGER_ARRAY ar
//  */

// function sockMerchant(n, ar) {
//     // Write your code here
//     let hash = {};
//     let noPairs = 0;

//     for (let i = 0; i<ar.length; i++){
//         hash[ar[i]]? hash[ar[i]] += 1: hash[ar[i]] =1;

//         if (hash[ar[i]] %2 === 0){
//             noPairs++;
//         }
//     }
//     return noPairs;
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine().trim(), 10);

//     const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

//     const result = sockMerchant(n, ar);

//     ws.write(result + '\n');

//     ws.end();
// }

// function countingValleys(steps, path) {
//     // Write your code here
//     let valleys = 0;
//     let level = 0;

//     for (const step of path){
//         let prev = level;
//         level = step === 'U' ? level + 1 : level - 1;
//         if (prev == -1 && level == 0) valleys++;
//     }
//     return valleys;
// }


const number = [1,2,3,4,5];
let len = number.length;

for(let i = 0; i < len; i++){
    if (number[i] % 2 ===0){
        console.log(number[i] + " " + "is even number");
    }
    else{
        console.log(number[i] + " " + "is odd number");
    }
}
// const person = {
//     name: 'Ransom',
//     school: 'seed faith',
//     church: 'living faith',
//     age: '21',
//     education: false,
//     married: true,
//     family: ['Esther', 'Sunday', 'Success', 'Stanley'],
//     introduction: function(){
//         console.log('hello!, who are you ?');
//     },
// };

// console.log(person.family[0]);

