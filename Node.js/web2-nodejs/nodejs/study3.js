// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let lines = [];

// rl.on('line', function (line) {
//     lines.push(line.trim());
// }).on('close', function () {
//     processInput(lines);
//     process.exit(0);
// });

// //보증금
// //결석 횟수
// //총 남은 금액

// function processInput(input) {
//     // 여기에 핵심 로직을 작성하세요.
//     for (let i = 0; i < input.length; i++) {
//         let piro = input[i][0].split(' ')
//         let cnt = 20000*Number(piro[i][1])
//         let total = Number(80000-cnt)
//         console.log(`${piro[i][0]}: ${total}`)
//     }
// }