const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const str = input[0];
    const answer = [...str].map(v=>{
        if(v===v.toUpperCase()){
            return v.toLowerCase()
        } else {
            return v.toUpperCase()
        }
    })
    console.log(answer.join(''))
});