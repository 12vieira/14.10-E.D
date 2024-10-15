const prompt = require("prompt-sync")();

for (let i = 1; i <= 20; i++)  {
    if(i % 2 == 0){
        console.log(`o número ${i} é par`)
    } else{
        console.log(`o número ${i} é impar`)
    }
}