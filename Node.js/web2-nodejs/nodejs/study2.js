//스켈레톤 코드. processInput함수 안에 로직을 작성하세요
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function (line) {
    lines.push(line.trim());
}).on('close', function () {
    processInput(lines);
    process.exit(0);
});

//input: 리스트 안에 각 줄이 콤마로 구분되서 들어옴
function processInput(input) {
    // 여기에 핵심 로직을 작성하세요.

    const total = Number(input[0]);
    const cnt = Number(input[1]);
    let sum = 0;


    for (let i = 2; i < cnt + 2; i++) {
        let data = input[i].split(' ');
        let real = Number(data[0]) * Number(data[1]);
        sum+=real;
    }
    if(total == sum){
        console.log('Yes');
    }
    else{
        console.log('No');
    }
}
